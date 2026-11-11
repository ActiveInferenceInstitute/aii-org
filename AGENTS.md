# AGENTS.md — Active Inference Institute Website

## Purpose

This repository is the **public-facing organizational website** for the Active Inference Institute, deployed as a static GitHub Pages site. It contains core informational pages (mission, history, governance, research, education, tools) and 12 catalogued interactive educational simulations demonstrating Active Inference concepts.

## Architecture & Modular Structure

The codebase is organized into strict functional modules:

- **Repository root** — `index.html` entry, shared `site.css` (design tokens), and `site-components.js`. No build system or bundler.
- **`pages/`** — The core site UI. These files depend on root CSS/JS using dynamic `basePath` resolution. Header/footer are injected into `<div id="site-header"></div>` and `<div id="site-footer"></div>`.
- `simulations/` — 12 catalogued standalone Canvas-based interactive demos demonstrating Active Inference concepts. These are self-contained HTML files (inline CSS/JS) with no root-component dependency; the folder also contains four intentionally unlinked experimental or legacy files: `cochlea.html`, `human_eye.html`, `t_maze_crr.html`, and `human_ai_fep(experiment_only_for_discussion_AICACP).html`.
- **`assets/`** — Static media (11 simulation thumbnails, 2 cover images, favicons and a social-preview image, BOD/SAB headshot subdirectories retained as a media archive, and a PDF payload). The roster pages link the canonical membership roster instead of rendering portraits.
- **`docs/`** — Cross-cutting documentation only: [`docs/README.md`](docs/README.md) is the index, covering the [site architecture](docs/site-architecture.md), [local development](docs/local-development.md), [validation](docs/validation.md), and the research-bibliography [source records](docs/research-sources.md). Directory-specific details stay in the `pages/`, `simulations/`, and `assets/` guides.

## Key Conventions

1. **Shared components (`site-components.js`)** — Injects the header, footer, mega-menu, and mobile slide-out nav. Exposes a `basePath` computed dynamically from the URL depth, making navigation resilient whether running locally or deployed.
2. **UK spelling** — `site-components.js` automatically localises text for `en-GB` users (e.g., "behaviour", "organisation", "programme").
3. **Canvas logos** — The π-symbol logo is drawn via Canvas API in both header and footer (no image file).
4. **Design tokens** — Defined in `:root` of `site.css` (`--accent: #c54a2a`, `--black`, `--white`, Georgia serif, breakpoints at 1200px/1024px/900px/768px/480px).
5. **No external dependencies in the core site** — No CDN, npm, or loaded JS libraries. Some standalone simulations load Google Fonts for typography (`Cormorant Garamond`, `JetBrains Mono`).

## File Inventory

| Category | Count | Directory | Description |
|----------|-------|-----------|-------------|
| Core layout | 1 | `/` | `index.html` landing page |
| Shared logic | 2 | `/` | `site.css`, `site-components.js` |
| Site Pages | 8 | `/pages/` | history, vision-mission, bod, sab, simulations, research, education, tools |
| Simulations | 12 | `/simulations/` | Self-contained HTML demos |
| Base Media | 18 | `/assets/` | 11 simulation thumbnails, 2 cover images, 4 site icons/social-preview assets, 1 PDF |
| BOD headshots| 10 | `/assets/bod/` | Retained as a media archive; the roster page links the canonical registry |
| SAB headshots| 29 | `/assets/sab/` | Retained as a media archive; the roster page links the canonical registry |
| Documentation | 6 | `/docs/` | Cross-cutting guides (index, architecture, local development, validation) plus the research-bibliography source records |

## Editing Notes

- **URL Paths:** Because GitHub Pages maps to `/aii-org/`, avoid leading slashes (`/`) in URLs. Use the relative `basePath` or `../` structure.
- **New simulation:** Drop a self-contained `.html` into `simulations/`, name it using `snake_case`, and update the catalog in `pages/simulations.html` and `simulations/README.md`.

## Local Development

No build system is used. Serve the repo root with any static HTTP server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` to test. All navigation, asset paths, and `basePath` logic work correctly under this setup.

## Validation

Run the repository link and fragment check before committing:

```bash
bun scripts/check-site.mjs
```

It resolves local HTML and inline Markdown links, assets, fragment targets, and links
injected by the shared header/footer. There is no separate test suite or build step.
