# Sasa Remodeling

Bilingual English and Serbian draft for a residential remodeling and installation business serving Houston and surrounding areas.

Four pages in each language: Home, About us, Gallery, Contact us. Flag links at the top switch to the matching page. Serbian uses Latin script. The gallery has translated category filters and a photo viewer with keyboard, touch, and focus support. Sample photography is clearly identified as inspiration.

## Edit and preview

Install a current Node.js LTS release and Git for Windows. No npm dependencies are required.

```sh
npm run build
npm run check
npm start
```

Open http://localhost:4173. Keep the preview terminal running while reviewing.

- Contact details, shared photo paths, English/Serbian photo captions and alt text: `data/site.mjs`
- Page copy, navigation, controls, and translations: `data/locales.mjs` (English hero/services also use `english` in `data/site.mjs`)
- Shared page structure and generation: `scripts/build.mjs`
- Colors, spacing, responsive layout: `assets/styles.css`
- Menu, filters, photo viewer: `assets/app.js`
- Local photos: `assets/images/`
- Build brief, editing guide, recovery guide, and verification: `NOTES/`

Rebuild after changing source content. The generated HTML pages are committed at the repository root for GitHub Pages deployment from `main` and `/ (root)`. Relative URLs work under the `/sasaremodeling/` repository path.

The business email is currently an **unverified placeholder**: `sasaremodeling@sasaremodeling.com`. Confirm it with Sasa before relying on email contact. Git commit email is separate from the business contact email.

See `NOTES/RECOVERY-AND-UPDATES.md` for transferring to another computer and the edit → verify → commit → push workflow.

Current status: committed and pushed to the private `nimailni/sasaremodeling` repository. GitHub Pages is not enabled; the user chose to keep the draft private for now. See `NOTES/DEPLOYMENT.md` before publishing.
