# AGENTS.md — Assets Directory

## Purpose

Static media assets for the Active Inference Institute website. Contains the simulation thumbnails displayed on `pages/simulations.html`, two cover images used across the site, a reference PDF, and headshot subdirectories.

## Structure

- **Root** — 11 simulation thumbnails (`sim-*.png`), cover images (`textbook-cover.jpg`, `fundamentals-26.jpg`), PDF (`2022_ActiveInference_Textbook.pdf`)
- **`bod/`** — Board of Directors headshot photos retained as a media archive (10 members); `pages/bod.html` now links the canonical membership roster instead of rendering portraits
- **`sab/`** — Scientific Advisory Board headshot photos retained as a media archive (29 members); `pages/sab.html` now links the canonical membership roster instead of rendering portraits

## Conventions

- Headshot filenames follow `firstname_lastname.jpg` convention (lowercase, underscores)
- Site images are referenced from `pages/` using relative paths (e.g., `src="../assets/sim-ink.png"`); the headshot subdirectories are currently unreferenced and retained as an archive
- No build step or image optimization pipeline — files are served as-is via GitHub Pages
