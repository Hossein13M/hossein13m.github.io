import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = new URL('../dist/', import.meta.url);
const headersPath = new URL('_headers', outputDirectory);
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const hashes = new Set();
const htmlFiles = [];

for (const entry of readdirSync(outputDirectory, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

  const filePath = join(entry.parentPath, entry.name);
  htmlFiles.push(filePath);
  const html = readFileSync(filePath, 'utf8');
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

// GitHub Pages ignores _headers. A meta tag is what the browser actually receives.
const metaTag = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;

for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, 'utf8');
  if (html.includes('http-equiv="Content-Security-Policy"')) continue;

  const head = html.match(/<head[^>]*>/i);
  if (!head) throw new Error(`No <head> in ${filePath}`);

  // Nuxt writes 404.html as an empty client shell, so the error-page meta never lands in it.
  const notFoundTags = filePath.endsWith('/404.html')
    ? '\n    <title>Not Found — Hossein Mousavi</title>\n    <meta name="robots" content="noindex, nofollow">'
    : '';

  writeFileSync(
    filePath,
    html.replace(head[0], `${head[0]}\n    ${metaTag}${notFoundTags}`)
  );
}
