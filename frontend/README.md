# Portfolio Frontend

React 19 + Vite 6 + Tailwind CSS v4 portfolio for [mtang.me](https://mtang.me).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 5174 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run oxlint |

## Project structure

```
src/
├── components/   # Reusable UI (header, nav, buttons, etc.)
├── data/         # Projects and experience content
├── hooks/        # Page title, preload fade
├── pages/        # Route-level views
├── styles/ui.js  # Shared Tailwind class tokens
└── index.css     # Theme + base styles
public/
├── images/       # Site images
├── resources/    # PDFs, resume
└── CNAME         # Custom domain (mtang.me)
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage (about, projects, experience) |
| `/projects/:slug` | Project detail |
| `/generic` | Sample content page |
| `/element-templates` | UI reference page |

## Deploying to GitHub Pages

This is a client-side SPA with clean URLs. GitHub Pages needs a fallback for direct loads and refreshes on routes like `/projects/neat`.

### Option A — Deploy `dist/` contents to repo root

1. `npm run build` (also writes `dist/404.html` for SPA fallback)
2. Copy `dist/*` to the branch GitHub Pages serves (e.g. `master` or `gh-pages`)
3. Ensure `CNAME` is included for `mtang.me`

### Option B — `frontend/` subfolder with Actions (recommended)

Add a workflow that builds on push and publishes `frontend/dist/` to Pages. The build script already copies `index.html` → `404.html` so GitHub Pages serves the SPA shell for unknown paths.

### `base` path

Configured as `/` for domain root (`mtang.me`). Override for subpath hosting:

```bash
VITE_BASE_PATH=/subpath/ npm run build
```

## Notes

- Scroll behavior is native (hash links + CSS `sticky` nav). No JS scroll hijacking.
- Assets live in `public/` and are served at `/images/...`, `/resources/...`.
- The frozen static site is on the `legacy-static` branch for reference.
