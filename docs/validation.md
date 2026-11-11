# Validation

The repository has one automated check: `scripts/check-site.mjs`. It is the gate
for link, asset, and fragment integrity, and the hosted CI job runs exactly it.

## The site check

Run it from the repository root with [Bun](https://bun.sh/) (its built-in
`HTMLRewriter` parses the HTML; no packages are installed):

```bash
bun scripts/check-site.mjs
```

An optional directory argument checks a copy instead of the working tree:

```bash
bun scripts/check-site.mjs /path/to/site-copy
```

### What it checks

- Local links in `.html` files and inline Markdown links in `.md` files.
- Local assets (`href` and `src` destinations).
- HTML fragment (`#id`) targets within local HTML documents.
- Same-domain absolute URLs that point back into the site.
- Links injected by the shared `headerHTML` and `footerHTML` templates in
  `site-components.js`, resolved with the same `basePath` the page uses.

It exits non-zero on any missing target and prints a summary line, for example:

```
PASS: 42 documents, 456 local references (including shared navigation).
```

### What it does not check

External services, Markdown heading fragments, CSS `url(...)` references, and
links generated inside simulation scripts. A green check means local
destinations resolve; it does not establish that an external page is live or that
it is the right source (see
[`research-sources.md`](research-sources.md) for scholarly-link policy).

## Continuous integration

[`../.github/workflows/ci.yml`](../.github/workflows/ci.yml) runs the site check
on every push and pull request targeting `main`:

- `ubuntu-latest`, with a ten-minute job timeout;
- a read-only checkout (`permissions: contents: read`, credentials not
  persisted);
- `oven-sh/setup-bun` to install Bun; and
- `bun scripts/check-site.mjs`.

A `concurrency` group cancels superseded runs for the same ref.
[`../.github/dependabot.yml`](../.github/dependabot.yml) keeps the pinned actions
current.

## Recommended local sequence

Before opening a pull request, from the repository root:

```bash
git diff --check
bun scripts/check-site.mjs
python3 -m http.server 8000   # then preview the changed page
```

See [`local-development.md`](local-development.md) for the preview workflow.
