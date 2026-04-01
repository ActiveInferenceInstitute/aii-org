# AGENTS.md — Scientific Advisory Board Headshots

## Purpose

Headshot photographs for the Scientific Advisory Board members, displayed on `sab.html`. 29 members have image files; 3 members (Ali Rahmjoo, Elliott Hauser, Jana Lumi) use HTML-rendered initial placeholders instead.

## Conventions

- Format: JPEG (`.jpg`)
- Naming: `firstname_lastname.jpg` (lowercase, underscores; hyphens preserved in surnames)
- Referenced from `sab.html` as `src="../assets/sab/firstname_lastname.jpg"`
- Images are square or near-square, displayed at 88×88px (desktop) via CSS `object-fit: cover`
- All images include `loading="lazy"` and descriptive `alt` text
- Members without headshots use a `<span class="pi">XX</span>` initials placeholder
