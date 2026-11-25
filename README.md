# Personal Portfolio — Jayakrishna Ajithkumar Jayasree

A responsive single-page portfolio built with **React + Vite + TypeScript + Tailwind CSS** (the same stack Lovable uses). Light/dark theme, accessible navigation, and automatic deployment to GitHub Pages.

## Edit your content

Everything you'll want to change is in **one file**: [`src/content/portfolio.ts`](src/content/portfolio.ts).

- Text in `[square brackets]` is a **placeholder**. It shows up highlighted in amber on the page, so you can find what's left to fill in.
- Links left as `""` (empty) are **hidden on the live site**. When you run `npm run dev` they appear as dashed "add link" hints.
- To add a CV download, put `cv.pdf` in `public/` and set `hero.cvUrl: './cv.pdf'`.
- To change the accent colour, edit `--accent` in `src/index.css` (one value for light, one for dark).
- Page title, description and social-preview tags are in `index.html`.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

Requires Node 20+.

## Project structure

```
src/
  content/portfolio.ts    ← all site content
  components/
    Nav.tsx               sticky nav, active-section highlight, mobile menu, theme toggle
    Hero.tsx              hero with CTAs
    Sections.tsx          About, Skills, Projects, Experience/Education, Contact, Footer
    ui.tsx                shared bits: Section, Reveal (scroll fade-in), Tag, ExtLink, icons
  lib/placeholder.ts
  index.css               theme tokens + component classes
.github/workflows/deploy.yml   GitHub Pages deployment
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (branch `main`).
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and publishes the site to `https://<your-username>.github.io/<repo-name>/`.

Tip: if you name the repo `<your-username>.github.io`, the site is served at `https://<your-username>.github.io/`.

## Accessibility & behaviour

- Skip-to-content link, visible keyboard focus rings, labelled icon buttons, `aria-current` on the active nav item
- Colour tokens chosen for WCAG AA contrast in both themes
- Animations are subtle and turned off when the visitor's system asks for reduced motion
- No trackers, no secrets, no backend. The contact button uses `mailto:`.
