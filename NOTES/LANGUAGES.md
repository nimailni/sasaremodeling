# English and Serbian

The user requested a bilingual site after the original English-only draft. Serbian uses Latin script (`sr-Latn`). English uses `en`. The business name, owner name, telephone number, and email are retained as supplied.

| Page | English | Serbian |
| --- | --- | --- |
| Home | index.html | index-sr.html |
| About | about.html | about-sr.html |
| Gallery | gallery.html | gallery-sr.html |
| Contact | contact.html | contact-sr.html |

Flag links labeled **English** and **Serbian** sit above the navigation on every page, including mobile. Each link points to the same page in the other language. Page and footer navigation preserve the language. The selected language remains after reload because it is part of the URL. The language links also work without JavaScript.

Both versions are generated from the same templates in `scripts/build.mjs` and use the same images, layout, and interactions. No translation service, external flag hosting, or new dependency is required.

Edit page translations in `data/locales.mjs`. English hero/services copy originates in `english` in `data/site.mjs`. Both English and Serbian photo captions/alt text are in `data/site.mjs`. Category keys stay in English internally; translated labels are in each locale's `categories` object.

Flags are generated locally as SVG: United States for English and Serbia's red/blue/white civil flag for Serbian. Language names remain English/Serbian as requested, on both versions.

After edits, run `npm run build`, `npm run check`, and preview both languages. Commit all eight HTML files, source data, and assets before pushing.
