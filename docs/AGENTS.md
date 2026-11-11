# AGENTS.md — Docs Directory

## Purpose

Cross-cutting documentation for the organizational website. The index is
[`README.md`](README.md); the repository conventions are in
[`../AGENTS.md`](../AGENTS.md).

## Contents

| File | Focus |
| --- | --- |
| [`README.md`](README.md) | Index of this directory and of the distributed folder guides |
| [`site-architecture.md`](site-architecture.md) | Layout, shared components, page contract, URL rules |
| [`local-development.md`](local-development.md) | Local preview and editing workflow |
| [`validation.md`](validation.md) | The `check-site.mjs` check and the CI job |
| [`research-sources.md`](research-sources.md) | Primary-source verification for the research bibliography |

## Rules

- Directory-specific details belong in the guide beside the files
  (`pages/README.md`, `simulations/README.md`, `assets/README.md`); keep these
  documents cross-cutting and link rather than duplicate.
- Use relative links for repository files and canonical URLs for external
  sources.
- Do not state a count, path, or command that the tree does not support; verify
  it against `git ls-files` and `scripts/check-site.mjs`.
- After changing navigation or local links, run `bun scripts/check-site.mjs`
  from the repository root.
