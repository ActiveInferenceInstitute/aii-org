# AGENTS.md — Scientific Advisory Board Headshots

## Purpose

Archived headshot photographs for the Scientific Advisory Board members. `pages/sab.html` no longer renders portraits; it links the canonical membership roster maintained by the Institute registry. 29 members have image files; 3 members (Ali Rahmjoo, Elliott Hauser, Jana Lumi) had HTML-rendered initial placeholders instead.

## Conventions

- Format: JPEG (`.jpg`)
- Naming: `firstname_lastname.jpg` (lowercase, underscores; hyphens preserved in surnames)
- Archived: no page currently references these files. If a page renders headshots again, reference them as `src="../assets/sab/firstname_lastname.jpg"` with descriptive `alt` text and `loading="lazy"`
- Images are square or near-square, suitable for CSS `object-fit: cover` at small display sizes
- Members without headshots used a `<span class="pi">XX</span>` initials placeholder
