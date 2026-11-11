# Site architecture

The website is a static [GitHub Pages](https://pages.github.com/) site: plain
HTML, one shared stylesheet, and vanilla JavaScript. There is no build system,
bundler, or package installation. This document describes how the pieces fit
together; [`../AGENTS.md`](../AGENTS.md) is the terse convention list and
[`../pages/AGENTS.md`](../pages/AGENTS.md) states the per-page rules.

## Layout

```
aii-org/
├── index.html          ← Home page (entry point)
├── site.css            ← Shared design tokens and layout
├── site-components.js  ← Shared header, footer, and navigation injection
├── pages/              ← Core informational pages (8)
├── simulations/        ← Standalone Canvas demos (12 catalogued + 4 experimental)
├── assets/             ← Images, icons, and a reference PDF
│   ├── bod/            ← Board of Directors headshots (media archive)
│   └── sab/            ← Scientific Advisory Board headshots (media archive)
├── docs/               ← This documentation tree
├── scripts/            ← `check-site.mjs`, the link/fragment check
└── .github/            ← CI workflow and Dependabot configuration
```

`pages/README.md`, `simulations/README.md`, and `assets/README.md` inventory the
contents of their directories.

## Shared components

`site-components.js` is injected into every core page. It:

- injects the header, footer, mega-menu, and mobile slide-out navigation into the
  `<div id="site-header"></div>` and `<div id="site-footer"></div>` mount points;
- computes a `basePath` dynamically from the page's URL depth, so navigation
  links resolve correctly whether the page is served from the repository root or
  nested in `pages/`;
- localises text for `en-GB` visitors (for example, "behaviour", "organisation",
  "programme"); and
- draws the π-symbol logo with the Canvas API in both the header and footer, so
  no logo image file is required.

Design tokens (colours, type, and breakpoints) are defined in the `:root` block
of `site.css`. The core site loads no external CSS or JavaScript libraries;
some standalone simulations load Google Fonts for typography.

## Page contract

A core page under `pages/` must include, as specified in
[`../pages/AGENTS.md`](../pages/AGENTS.md) and
[`../CONTRIBUTING.md`](../CONTRIBUTING.md):

- `<link rel="stylesheet" href="../site.css">` in `<head>`;
- `<div id="site-header"></div>` before the page content;
- the page content wrapped in `<main id="main-content" tabindex="-1">` so the
  shared skip link has a focusable target;
- `<div id="site-footer"></div>` after the page content; and
- `<script src="../site-components.js"></script>` before `</body>`.

## URL rules

The site is deployed under the `/aii-org/` project path on GitHub Pages. Use
relative URLs (`../`, or the shared `basePath`) and never leading-root paths, so
that both the custom-domain deployment and a `/aii-org/` preview resolve the same
way.

## Simulations

The `simulations/` directory is deliberately independent of the shared
components: each catalogue simulation is a self-contained single-file HTML
application with inline styles and logic, rendered with the Canvas API.
[`../simulations/README.md`](../simulations/README.md) is the catalogue and
convention reference.

## Adding content

- **A new page** — follow the page contract above, then add it to the navigation
  in `site-components.js` and the checks in
  [`validation.md`](validation.md).
- **A new simulation** — drop a self-contained `snake_case` HTML file into
  `simulations/`, then update `pages/simulations.html` and
  `simulations/README.md` together. See
  [`../simulations/README.md`](../simulations/README.md).

After any change to navigation or local links, run the check described in
[`validation.md`](validation.md).
