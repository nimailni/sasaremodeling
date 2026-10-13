# Recovery and updates

## On another computer

1. Install Git for Windows and a current Node.js LTS release.
2. Authenticate to GitHub with an account that can access `nimailni/sasaremodeling`. Never save access tokens in this project or the NOTES folder.
3. Clone the repository:

```sh
git clone https://github.com/nimailni/sasaremodeling.git
cd sasaremodeling
```

4. Set this checkout's commit identity (local configuration does not travel with a clone):

```sh
git config user.name "Emil"
git config user.email "nicetin@yahoo.com"
```

5. Run `npm run build`, `npm run check`, then `npm start`.
6. Open http://localhost:4173.

If Git is missing from PATH on Windows, use `"C:\Program Files\Git\cmd\git.exe"` in Command Prompt, or `& 'C:\Program Files\Git\cmd\git.exe'` in PowerShell.

## Normal update workflow

```sh
git status
git pull --ff-only
# Edit data/site.mjs, scripts/build.mjs, assets/styles.css, or photos.
npm run build
npm run check
npm start
# Review desktop/mobile pages and interactions, then stop the preview with Ctrl+C.
git diff
git add README.md NOTES data scripts assets "*.html" package.json .gitignore .nojekyll
git commit -m "Describe the website update"
git push origin main
```

Once GitHub Pages is enabled from `main` and `/ (root)`, every successful push deploys automatically. No build runs on GitHub: commit the generated HTML after rebuilding locally. Check the repository's Actions tab for the Pages deployment result.

Expected public website URL: https://nimailni.github.io/sasaremodeling/

Only committed and pushed files are backed up on GitHub. Uncommitted changes need a separate backup. Never force-push or discard remote changes. If pull reports a conflict or diverged history, inspect and resolve it before pushing.

If Git reports dubious ownership, confirm the directory is yours and authorize only that specific checkout. Do not add a wildcard safe.directory setting.

## Optional detailed browser QA

`node scripts/browser-check.cjs` uses the Codex desktop runtime's Playwright and Sharp, plus installed Microsoft Edge. This is optional; it has no effect on the site. On another PC, set `SASA_NODE_MODULES` to a node_modules directory containing those packages, or review the preview manually. Screenshots and reports go in ignored `qa-output/`.
