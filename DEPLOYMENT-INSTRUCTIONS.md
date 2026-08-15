# Eric Birthday Hunt — Automated Deployment + Rifle Sound

## What changed

1. `index.html` now references `styles.css`, `app.js`, and the rifle audio with an automatically generated deployment version.
2. `index.html` checks `version.json` with caching disabled. If a visitor has an older deployed version, the page reloads itself using the new deployment version.
3. `app.js` plays `assets/rifle-shot.wav` while preserving the existing haptic response and synthesized fallback.
4. `.github/workflows/deploy.yml` runs every time `main` is updated. It:
   - builds a clean `_site` folder,
   - downloads the selected CC0 Tikka .30-06 recording into `assets/rifle-shot.wav`,
   - replaces `__VERSION__` with the Git commit SHA,
   - creates `version.json`,
   - deploys the result to GitHub Pages.

## Files to put in the repository

Replace the current root files with:

- `index.html`
- `app.js`
- `styles.css`

Add:

- `.github/workflows/deploy.yml`

`README.md` and this instruction file are optional for the live site.

## One-time GitHub setting

In the repository:

1. Open **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

After that, every push/commit to `main` automatically deploys the site.

## First deployment

Commit all four live files together. Open the repository's **Actions** tab and verify that **Deploy Eric Birthday Hunt** finishes successfully.

Because visitors who loaded the old pre-automation build do not yet have the new version checker, they may need one final refresh (or may naturally receive it when the old page cache expires). Once this automated build has loaded on a device, later versions can discover the new `version.json` and reload themselves.

## Future updates

Edit `index.html`, `styles.css`, or `app.js` normally and commit the changes to `main`.

Do **not** manually edit `?v=` values and do **not** replace `__VERSION__`. The GitHub Action handles that during deployment.

## Rifle audio

The workflow downloads the selected Tikka Model T3 .30-06 recording from the Free Firearms SFX Library mirror and deploys it as:

`assets/rifle-shot.wav`

The browser therefore plays the audio from your own GitHub Pages site rather than reaching out to the sound-library host during gameplay.
