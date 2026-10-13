# Sasa Remodeling

English first draft for a residential remodeling and installation business serving Houston and surrounding areas.

Four pages: Home, About us, Gallery, Contact us. The gallery has category filters and a photo viewer with keyboard, touch, and focus support. Sample photography is clearly identified as inspiration.

## Edit and preview

Install a current Node.js LTS release and Git for Windows. No npm dependencies are required.

```sh
npm run build
npm run check
npm start
```

Open http://localhost:4173. Keep the preview terminal running while reviewing.

- Contact details, English copy, photo paths, captions, categories, and alt text: `data/site.mjs`
- Shared page structure and longer page copy: `scripts/build.mjs`
- Colors, spacing, responsive layout: `assets/styles.css`
- Menu, filters, photo viewer: `assets/app.js`
- Local photos: `assets/images/`
- Build brief, editing guide, recovery guide, and verification: `NOTES/`

Rebuild after changing source content. The generated HTML pages are committed at the repository root for GitHub Pages deployment from `main` and `/ (root)`. Relative URLs work under the `/sasaremodeling/` repository path.

The business email is currently an **unverified placeholder**: `sasaremodeling@sasaremodeling.com`. Confirm it with Sasa before relying on email contact. Git commit email is separate from the business contact email.

See `NOTES/RECOVERY-AND-UPDATES.md` for transferring to another computer and the edit → verify → commit → push workflow.
