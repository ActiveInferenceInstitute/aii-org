# Documentation — aii-org

Cross-cutting documentation for the Active Inference Institute's public
website. Directory-specific guides live beside the files they describe; this
page is the index that ties them together.

Start with [`../README.md`](../README.md) for the project overview and
[`../CONTRIBUTING.md`](../CONTRIBUTING.md) for the contribution workflow.

## Choose a reading path

- **New contributor** — read [`local-development.md`](local-development.md) for
  the local preview and edit workflow, then [`validation.md`](validation.md) for
  the check that must pass before a pull request.
- **Site editor** — read [`site-architecture.md`](site-architecture.md) for the
  shared-component contract, the page requirements, and the URL rules.
- **Research or bibliography editor** — read
  [`research-sources.md`](research-sources.md) for the primary-source records and
  editorial decisions behind `pages/research.html`.
- **Maintainer** — read [`validation.md`](validation.md) for the link/fragment
  check and the continuous-integration job.

## Documents in this directory

| Document | Purpose |
| --- | --- |
| [`site-architecture.md`](site-architecture.md) | Repository layout, shared components, page contract, and URL rules |
| [`local-development.md`](local-development.md) | Local preview, editing workflow, and adding a page or simulation |
| [`validation.md`](validation.md) | The `check-site.mjs` link/fragment check and the CI job |
| [`research-sources.md`](research-sources.md) | Primary-source verification and editorial decisions for the research bibliography |
| [`AGENTS.md`](AGENTS.md) | Conventions for maintainers and automated agents editing `docs/` |

## Directory guides

Each content directory carries its own guide:

| Guide | Scope |
| --- | --- |
| [`../pages/README.md`](../pages/README.md) | Core site pages and shared-component requirements |
| [`../simulations/README.md`](../simulations/README.md) | Public simulation catalogue and experimental files |
| [`../assets/README.md`](../assets/README.md) | Site media, documents, and asset subdirectories |
| [`../assets/bod/README.md`](../assets/bod/README.md) | Board of Directors headshots |
| [`../assets/sab/README.md`](../assets/sab/README.md) | Scientific Advisory Board headshots |

## Repository-level documents

| Document | Purpose |
| --- | --- |
| [`../README.md`](../README.md) | Project overview, resources, and directory structure |
| [`../AGENTS.md`](../AGENTS.md) | Repository conventions for maintainers and automated agents |
| [`../CONTRIBUTING.md`](../CONTRIBUTING.md) | Contribution, local preview, and pull-request guidance |
| [`../TO-DO.md`](../TO-DO.md) | Outstanding scoped work; completed items are removed |
| [`../scripts/check-site.mjs`](../scripts/check-site.mjs) | Local link, asset, and HTML fragment check |
| [`../.github/workflows/ci.yml`](../.github/workflows/ci.yml) | The hosted site check |
