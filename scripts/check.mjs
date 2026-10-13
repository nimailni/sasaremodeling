import { readFile, access } from 'node:fs/promises';
import { business, photos } from '../data/site.mjs';
const pages = ['index.html','about.html','gallery.html','contact.html'];
for (const page of pages) {
  const html = await readFile(new URL(`../${page}`,import.meta.url),'utf8');
  for (const href of pages) if (!html.includes(`href="${href}"`)) throw new Error(`${page}: missing link ${href}`);
  if (!html.includes(business.phoneHref) || !html.includes('aria-current="page"') || !html.includes('<html lang="en">')) throw new Error(`${page}: missing accessibility or contact data`);
  for (const match of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
    if (/^(https?:|tel:|mailto:)/.test(match[1])) continue;
    await access(new URL(`../${match[1]}`,import.meta.url));
  }
}
for (const photo of photos) { await access(new URL(`../${photo.src}`,import.meta.url)); if (!photo.alt) throw new Error('Missing alt text'); }
console.log('Checked four pages, local assets, navigation, contact links, and photo metadata.');
