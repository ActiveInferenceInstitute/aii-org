# InstituteOS integration — aii-org

## Identity

| Field | Value |
| --- | --- |
| Repository | `ActiveInferenceInstitute/aii-org` |
| Affiliation | `institute` |
| Category | `website` |
| Status | `active` |
| Maturity | `wip` |
| Steward | Active Inference Institute |
| Default branch | `main` |
| Current release | — |
| License | `CC-BY-4.0` |
| Citation | Active Inference Institute — aii-org. |

## Federation

| Setting | Value |
| --- | --- |
| Dashboard mode | `repos` |
| Analytics | `true` |
| Dashboard | `true` |
| Sync policy | `pull` |
| Registries | — |
| Tags | aii-org, website, static-site, organization |

## Ecosystem relations

| Repository | Relation | Note |
| --- | --- | --- |
| `ActiveInferenceInstitute/InstituteOS` | `referenced-by` | Federated via the InstituteOS .aii manifest. |

## Key artifacts

| Path | Kind | Description |
| --- | --- | --- |
| `README.md` | `doc` | Repository overview. |
| `AGENTS.md` | `doc` | Agent guidance. |
| `LICENSE` | `doc` | License. |
| `CITATION.cff` | `citation` | Machine-readable citation metadata. |
| `docs` | `doc` | Documentation tree. |

## Portable tasks

| Task | Command | Working directory | Description |
| --- | --- | --- | --- |
| `inventory` | `git ls-files` | `.` | List tracked files. |

## Validation

```bash
python -m aii_platform.aii_sidecar.validate <repo> --completeness
python -m aii_platform.aii_sidecar docs <repo> --overwrite
python -m aii_platform.aii_sidecar.run <repo> --list
```

The sidecar is valid when `validate` prints `OK` and reports no missing artifact,
manifest, link, or declared-doc path. Completeness is a curation target, not a
runtime requirement.

## Data boundary

This sidecar carries metadata only. It does not grant execution permission, does not
replace the repository's own documentation, and must not be used to move private
content into a public repository. Task execution is limited to trusted checkouts.
