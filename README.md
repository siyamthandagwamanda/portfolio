# Siyamthanda Gwamanda — Developer Journey Portfolio

<img src="https://socialify.git.ci/siyamthandagwamanda/portfolio/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="portfolio" width="640" height="320" />

A React + Vite + TypeScript rebuild of the portfolio, reimagined around a
"developer RPG" concept: skills as inventory, projects as completed
missions, and career growth as a level-progression quest path.

## Stack

- React 19 + TypeScript
- Vite
- Plain CSS with design tokens (no framework) — dark/light theme via
  CSS variables and `data-theme`
- JetBrains Mono (display/code) + Inter (body) from Google Fonts

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   # Nav, Hero, About, Skills, Projects, Journey, Wisdom, Contact, Footer
  data/         # content.ts — skills, missions, journey levels, wisdom quotes
  hooks/        # useTheme.ts — dark/light mode with localStorage persistence
  index.css     # design tokens + base styles
```

## Customizing

- Edit `src/data/content.ts` to update skills, projects, journey levels, or
  the wisdom quote pool.
- Contact details (email, phone, GitHub handle) live in
  `src/components/Contact.tsx`.
- Colors, fonts, spacing all flow from the CSS custom properties at the top
  of `src/index.css`.

## Deploying to GitHub Pages

```bash
npm run build
```

Push the contents of `dist/` to a `gh-pages` branch, or use the
`gh-pages` npm package / a GitHub Actions workflow pointed at `dist`.
