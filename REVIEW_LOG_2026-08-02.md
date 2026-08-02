# Documentation Deep Review Log — 2026-08-02

## Scope

Reviewed the public repository documentation and documentation-adjacent site references on `main` at initial HEAD `b8e3e19` after `git fetch origin` and `git pull --ff-only origin main`.

Inventory covered:

- `README.md`, root `AGENTS.md`, `LICENSE`, `.aii/config.yaml`, `CNAME`, and `.gitignore`;
- `pages/README.md` and `pages/AGENTS.md`;
- `simulations/README.md` and `simulations/AGENTS.md`;
- `assets/README.md`, `assets/AGENTS.md`, and the BOD/SAB README and AGENTS files;
- all HTML pages and simulation catalogue references;
- shared navigation in `site-components.js`.

## Findings

- The repository had useful directory-level documentation but no contribution guide, citation file, or top-level documentation index.
- Two page-relative links incorrectly resolved to `pages/index.html`.
- Navigation referenced four absent anchors: `research.html#past`, `#current`, `#future`, and `education.html#internship`.
- `https://rxinfer.ml` returned HTTP 404; the working `https://rxinfer.com` URL was already used elsewhere in the site.
- Three `href="#"` placeholders led to non-destinations: the home-page CTA and the desktop/mobile shared navigation CTAs.
- The README described the licence as “All rights reserved” although the repository contains a CC-BY-4.0 licence.
- Simulation documentation had small table-formatting issues, an incomplete concept cell, and omitted two intentionally unlinked experimental files.
- External-link spot checks returned successful responses for the maintained key resources tested; MIT Press returned 403 to the automated client, so it was not treated as a dead link.

## Implemented

See [`TO-DO.md`](TO-DO.md) for the scoped work and completion references. Added `CONTRIBUTING.md` and `CITATION.cff`; corrected links and anchors; aligned README and simulation documentation with the repository; and routed placeholder CTAs to the documented Discord community invite.

## Verification

- Local HTML/asset reference scan after edits: no broken local file references or cross-file anchors.
- `git diff --check`: passed.
- `node --check site-components.js`: passed.
- Static preview command documented; no build system or repository test suite exists.
