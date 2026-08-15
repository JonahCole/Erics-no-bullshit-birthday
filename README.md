# Eric's Birthday Hunt

A tiny static birthday game built for GitHub Pages. No build step and no external images. The rifle shot is loaded from a public CC0 audio library on GitHub.

## Upload to GitHub Pages

1. Create a new repository (or use an existing empty one).
2. Upload `index.html`, `styles.css`, and `app.js` to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

That's it.

## Customize cards

Open `app.js` and edit the `cards` array at the top. Each card has:

```js
{ category: "FISHING", title: "Go fishing.", flavor: "That's it. That's the whole assignment." }
```

The game intentionally uses only HTML/CSS/JS so it works cleanly on GitHub Pages without asset path issues.


## Rifle sound

The primary shot is `W_29P.wav` from the Free Firearms SFX Library mirror: a prepared Tikka Model T3 .30-06 bolt-action gunshot recorded at near distance in front of the shooter. The library is released under CC0 1.0.

The app preloads the recording from the public GitHub mirror. If that file cannot be played, `app.js` falls back to a short synthesized crack/boom while keeping the same haptic response.
