# Contributing to aii-org

Thank you for helping maintain the Active Inference Institute's public website and educational simulations. Corrections, accessibility improvements, documentation fixes, and new demonstrations are welcome.

## Before you edit

1. Read the repository conventions in [`AGENTS.md`](AGENTS.md) and the directory-level guide for the area you will change.
2. Confirm that your change is grounded in the existing site content or in a source you can identify in the pull request.
3. Keep the site dependency-free: the core site uses static HTML, shared CSS, and vanilla JavaScript. Do not add a build system for a documentation-only change.

## Local preview

The site has no build step. From the repository root, run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` and test the page you changed. Check navigation, relative asset paths, responsive behaviour, and browser-console errors.

## Site pages

Core pages live in `pages/` and use the shared root components. A new page should:

- include `<link rel="stylesheet" href="../site.css">` in its `<head>`;
- include `<div id="site-header"></div>` before the page content;
- include `<div id="site-footer"></div>` after the page content; and
- load `<script src="../site-components.js"></script>` before `</body>`.

Use relative paths, not leading-root paths, because the site is deployed under the GitHub Pages project path during repository previews.

## Simulations

The public catalogue is maintained in `pages/simulations.html`; its companion inventory and conventions are in [`simulations/README.md`](simulations/README.md). Catalogue simulations are standalone HTML applications and should not depend on the shared site CSS or JavaScript. New simulation filenames use lowercase `snake_case`; the legacy `Ink.html` and `Apple-Frog.html` names remain for link stability.

If you add a catalogue simulation, add its HTML file, thumbnail (when appropriate), catalogue entry, and documentation entry together. Leave experimental work out of the public catalogue until it is ready.

## Documentation and validation

Update the nearest README when structure or behaviour changes. Check local links and anchors before opening a pull request. For a static-site change, a useful minimum check is:

```bash
git diff --check
python3 -m http.server 8000
```

The server command is for local preview; stop it after testing. There is no repository test suite or build pipeline in this repository.

## Pull requests

Use a focused branch and explain what changed, how it was verified, and any known limitations. Keep unrelated formatting churn out of the diff. Do not commit credentials, `.env` files, generated local artefacts, or private information.

## Licence

Contributions to this repository are published under the [Creative Commons Attribution 4.0 International licence (CC BY 4.0)](LICENSE), unless a pull request explicitly identifies material with a different compatible licence.
