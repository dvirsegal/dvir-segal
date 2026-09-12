# Dvir Segal - Personal Landing Page

Source code for my personal landing page, live at **https://dvirsegal.github.io/dvir-segal/**.

A single-page React site that says hi and links out to the places I write and work:

- [Blog (Medium)](https://dvirsegal.medium.com/)
- [GitHub](https://github.com/dvirsegal/)
- [Twitter / X](https://twitter.com/dvir_segal/)
- [dev.to](https://dev.to/dejavo/)
- [Stack Overflow](https://stackoverflow.com/users/3125120/dejavo/)
- [LinkedIn](https://www.linkedin.com/in/dvirsegal/)

## Tech stack

- React 17 + Vite
- Content driven by `src/configurations.json`: intro, tagline, background mode, social icons
- Deployed to GitHub Pages via `gh-pages`

## Run locally

```bash
npm install
npm start        # vite dev server
```

## Build and deploy

```bash
npm run build    # vite build -> dist/
npm run deploy   # publishes dist/ to GitHub Pages
```

## Customizing

Everything on the page comes from `src/configurations.json` - `devIntro`, `devDesc`, background (`plain` / `gradient` / image) and the icon list. Styling lives in `src/App.css`, `src/daylight.css` and `src/nightlight.css`.

## Credits

Forked from [singhkshitij/My-Landing-Page](https://github.com/singhkshitij/My-Landing-Page) - thanks for the great template. See [LICENSE](LICENSE).

<!-- auto-deployed by Cloudflare Pages Git integration -->
