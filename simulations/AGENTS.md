# AGENTS.md — Simulations Directory

## Architecture

Unlike the core site layout in `pages/`, the files in this directory are **100% standalone** single-file HTML applications.

They do NOT import `../site.css` or `../site-components.js`. Styles and application JavaScript are inline within each HTML file.

## Conventions

- Self-contained rendering without external graphics libraries. Most files use Canvas 2D; `human_eye.html` requires WebGL plus a Canvas 2D overlay.
- New filenames use lowercase and underscores (`snake_case`). Legacy files `Ink.html` and `Apple-Frog.html` retain their original names for link stability
- No runtime JS dependencies (no npm or unpkg bundles); some simulations load Google Fonts for typography
- Links back to the main site use relative paths to the root: `../` or `../pages/simulations.html`
- Simulation thumbnail assets are stored in `../assets/`
- The public catalogue in `pages/simulations.html` presents 12 main entries plus three supplemental entries: `cochlea.html`, `human_eye.html`, and `t_maze_crr.html`. Preserve that exposure. `human_ai_fep(experiment_only_for_discussion_AICACP).html` remains an unlisted discussion experiment, not a private file.
