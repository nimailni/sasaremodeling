# Editing the draft

## Business information

Edit `business` in `data/site.mjs`, then run `npm run build` and `npm run check`.

The draft business email is `sasaremodeling@sasaremodeling.com`. It has not been verified. Confirm it with Sasa and replace it here; the builder updates the Contact page's visible email and mailto link together.

The phone display is `713.301.8144`; the working phone link is `tel:+17133018144`. Update both values if the number changes.

## Photo replacement

1. Add an authorized photo to `assets/images/` using a descriptive filename, such as `houston-tile-shower.jpg`.
2. Find its entry in `photos` in `data/site.mjs`. Keep the entry's `id` if replacing it in the same slot.
3. Update `file`, `caption`, `alt`, and `category`. Optional `categories` lets one image appear in multiple filters. The available filters are Kitchens, Bathrooms, Tile & stone, and Wood details.
4. Replace the sample `source` and `license` data with the actual ownership/permission record when appropriate. The current map derives `source` from `unsplashId`; remove or adapt that mapping for owner photographs.
5. Run `npm run build` and `npm run check`. Preview all pages and open the photo viewer.

Use photos around 1400–1800 pixels wide, compressed as JPEG. Describe what is actually visible in the alt text. Avoid including private addresses, people, or client information without permission.

The sample-photo disclaimer is `english.galleryNote`. Keep it while any inspiration photos remain. Once all photos are Sasa's actual work, revise it accurately.

The hero photo is selected with `image('kitchen-counter', 'hero-image', true)` in `scripts/build.mjs`. Other photo slots also refer to stable IDs from the central data file.

## Copy and appearance

- Navigation labels, hero copy, services, and sample-photo note: `english` in `data/site.mjs`.
- Longer page content and shared header/footer: `scripts/build.mjs`.
- Colors and responsive layout: `assets/styles.css`.
- Gallery/menu behavior: `assets/app.js`.

Do not add unsupported experience, licensing, insurance, reviews, or company history. The supplied business facts are in the original brief.

English only for this draft. Add a language content object and page generation strategy when Serbian is requested; the current site intentionally has no language buttons.
