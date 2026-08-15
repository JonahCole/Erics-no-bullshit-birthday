# Eric's Birthday Hunt

A tiny static birthday game built for GitHub Pages. No build step, no dependencies, no external images.

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
