import { readFile, access } from 'node:fs/promises';
import { business, photos } from '../data/site.mjs';
import { locales, pageNames, pageFile } from '../data/locales.mjs';
for (const [language, locale] of Object.entries(locales)) {
for (const name of pageNames) {
  const page = pageFile(name, language);
  const html = await readFile(new URL(`../${page}`,import.meta.url),'utf8');
  for (const target of pageNames) if (!html.includes(`href="${pageFile(target, language)}"`)) throw new Error(`${page}: missing localized navigation ${target}`);
  for (const code of Object.keys(locales)) if (!html.includes(`href="${pageFile(name, code)}"`)) throw new Error(`${page}: missing same-page language switch`);
  if (!html.includes(business.phoneHref) || !html.includes('aria-current="page"') || !html.includes(`<html lang="${locale.htmlLang}"`)) throw new Error(`${page}: missing accessibility or contact data`);
  for (const match of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
    if (/^(https?:|tel:|mailto:)/.test(match[1])) continue;
    await access(new URL(`../${match[1]}`,import.meta.url));
  }
}
}
for (const photo of photos) { await access(new URL(`../${photo.src}`,import.meta.url)); if (!photo.alt) throw new Error('Missing alt text'); }
console.log('Checked eight bilingual pages, local assets, localized navigation, same-page language links, contact links, and photo metadata.');
