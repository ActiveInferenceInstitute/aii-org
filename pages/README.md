# Site Pages — Active Inference Institute Website

Informational pages that form the core structure of the institute's website. Include shared styling and components dynamically.

## Contents

| File | Description |
|------|-------------|
| `history.html` | Timeline of the Institute's origin and milestones |
| `vision-mission.html` | Strategic framework and core objectives |
| `bod.html` | Board of Directors: governance role and link to the canonical membership roster |
| `sab.html` | Scientific Advisory Board: advisory role and link to the canonical membership roster |
| `simulations.html` | Catalog index linking to all interactive simulations |
| `research.html` | Research pathways, selected publications with direct source links, and community research resources |
| `education.html` | Details on courses, textbook groups, and internships |
| `tools.html` | Directory of code libraries including RxInfer.jl |

All pages are accessible from the navigation mega-menu injected by `site-components.js`.

Each page includes the shared stylesheet, header/footer mount points, and script, as specified in [`AGENTS.md`](AGENTS.md). The content belongs in `<main id="main-content" tabindex="-1">` for keyboard access through the shared skip link. Local URLs remain relative so both custom-domain and `/aii-org/` previews work.

Run `bun scripts/check-site.mjs` from the repository root after editing links or anchors. For research metadata, direct scholarly records and unresolved citation decisions are documented in [`docs/research-sources.md`](../docs/research-sources.md). See [`CONTRIBUTING.md`](../CONTRIBUTING.md) for rendered and external-link checks.
