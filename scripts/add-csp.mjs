import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = new URL('../dist/', import.meta.url);
const headersPath = new URL('_headers', outputDirectory);
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const hashes = new Set();

for (const entry of readdirSync(outputDirectory, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

  const html = readFileSync(join(entry.parentPath, entry.name), 'utf8');
  for (const match of html.matchAll(scriptPattern)) {
    const [, attributes, content] = match;
    if (/\bsrc\s*=/.test(attributes) || !content) continue;

    const digest = createHash('sha256').update(content).digest('base64');
    hashes.add(`'sha256-${digest}'`);
  }
}

const scriptHashes = [...hashes].sort().join(' ');
if (!scriptHashes) throw new Error('No inline scripts found for CSP hashing.');

const policy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'self'",
  `script-src 'self' https://www.googletagmanager.com ${scriptHashes}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "font-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
  'upgrade-insecure-requests',
].join('; ');

const headers = readFileSync(headersPath, 'utf8');
if (!headers.startsWith('/*\n')) {
  throw new Error('Expected the global Netlify header block to appear first.');
}

writeFileSync(
  headersPath,
  headers.replace('/*\n', `/*\n  Content-Security-Policy: ${policy}\n`)
);
