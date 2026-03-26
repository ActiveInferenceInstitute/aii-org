# AGENTS.md — Simulations Directory

## Architecture

Unlike the core site layout in `pages/`, the files in this directory are **100% standalone** single-file HTML applications. 

They do NOT import `../site.css` or `../site-components.js`. All styles and JavaScript application logic are written inline or in `<script>`/`<style>` blocks within the HTML head.

## Conventions

- Self-contained rendering via `Canvas API` (no WebGL or external graphics libraries)
- New filenames use lowercase and underscores (`snake_case`). Legacy files `Ink.html` and `Apple-Frog.html` retain their original names for link stability
- No external dependencies (no npm, unpkg, or loaded CDNs)
- Links back to the main site use relative paths to the root: `../` or `../pages/simulations.html`
- Simulation thumbnail assets are stored in `../assets/`
