# Dvir Segal - Personal Landing Page

Source code for my personal landing page, live at **https://dvirsegal.pages.dev/**.

A single static HTML page that says hi and links out to the places I write and work:

- [Medium](https://dvirsegal.medium.com/)
- [GitHub](https://github.com/dvirsegal/)
- [X (Twitter)](https://x.com/dvir_segal/)
- [dev.to](https://dev.to/dejavo/)
- [Stack Overflow](https://stackoverflow.com/users/3125120/dejavo/)
- [LinkedIn](https://www.linkedin.com/in/dvirsegal/)
- [Blog](https://dvirsegal.github.io/)

## Tech stack

- One static `index.html`: inline CSS, a few lines of vanilla JS (typing effect, theme toggle, click to cycle background colors) and inline SVG icons from Font Awesome Free (CC BY 4.0)
- No framework and no runtime dependencies. Vite is only used as the dev server and to copy `public/` into `dist/`
- Deployed to Cloudflare Pages on every push to `master`

## Run locally

```bash
npm install
npm start        # vite dev server
npm run build    # -> dist/
```

## Customizing

Edit `index.html` directly: text, links and colors all live there. The background color lists are in the `modes` object in the inline script.

## Credits

Forked from [singhkshitij/My-Landing-Page](https://github.com/singhkshitij/My-Landing-Page) - thanks for the great template. See [LICENSE](LICENSE).

<!-- auto-deployed by Cloudflare Pages Git integration -->

<!-- auto-deploy verified after CF token revocation -->
