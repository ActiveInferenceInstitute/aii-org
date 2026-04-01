# AGENTS.md — Assets Directory

## Purpose

Static media assets for the Active Inference Institute website. Contains the simulation thumbnails displayed on `pages/simulations.html`, two cover images used across the site, a reference PDF, and headshot subdirectories.

## Structure

- **Root** — 11 simulation thumbnails (`sim-*.png`), cover images (`textbook-cover.jpg`, `fundamentals-26.jpg`), PDF (`2022_ActiveInference_Textbook.pdf`)
- **`bod/`** — Board of Directors headshot photos (10 members)
- **`sab/`** — Scientific Advisory Board headshot photos (29 members)

## Conventions

- Headshot filenames follow `firstname_lastname.jpg` convention (lowercase, underscores)
- Images are referenced from `pages/` using relative paths (e.g., `src="../assets/sim-ink.png"`)
- No build step or image optimization pipeline — files are served as-is via GitHub Pages
