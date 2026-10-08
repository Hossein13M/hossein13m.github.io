import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = new URL('../dist/', import.meta.url);
const outputPath = outputDirectory.pathname;
const stylesheetPattern =
  /<link\b(?=[^>]*\brel=["']stylesheet["'])(?=[^>]*\bhref=["']([^"']+\.css(?:\?[^"']*)?)["'])[^>]*>/g;
const cssCache = new Map();

for (const entry of readdirSync(outputDirectory, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

  const htmlPath = join(entry.parentPath, entry.name);
  const html = readFileSync(htmlPath, 'utf8');
  const inlined = html.replace(stylesheetPattern, (link, href) => {
    if (!href.startsWith('/')) return link;

    const assetPath = join(outputPath, href.split('?')[0].slice(1));
    if (!existsSync(assetPath)) return link;

    let css = cssCache.get(assetPath);
    if (!css) {
      css = readFileSync(assetPath, 'utf8').replaceAll('</style', '<\\/style');
      cssCache.set(assetPath, css);
    }

    return `<style data-href="${href}">${css}</style>`;
  });

  if (inlined !== html) writeFileSync(htmlPath, inlined);
}
