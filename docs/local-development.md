# Local development

There is no build step. Serve the repository root with any static HTTP server
and open the page you changed in a browser.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Navigation, asset paths, and the
`basePath` logic in `site-components.js` all work under this setup.

Stop the server after testing. Check the changed page at desktop and mobile
widths, exercise its navigation with a keyboard, and inspect the browser
console for errors. When you change relative paths, also preview under an
`/aii-org/` mount, because that is the deployed project path (see
[`site-architecture.md`](site-architecture.md)).

## Editing workflow

1. Read [`../CONTRIBUTING.md`](../CONTRIBUTING.md) and the directory guide for the
   area you are changing.
2. Make the change, keeping the site dependency-free.
3. Run the link and fragment check from the repository root:

   ```bash
   git diff --check
   bun scripts/check-site.mjs
   ```

   See [`validation.md`](validation.md) for what the check covers and its limits.
4. Preview the changed page locally as above.

## Adding a page

Core pages live in `pages/` and depend on the shared root components. Follow the
page contract in [`site-architecture.md`](site-architecture.md#page-contract),
then add the page to the navigation in `site-components.js` and to
[`../pages/README.md`](../pages/README.md).

## Adding a simulation

The public catalogue is maintained in `pages/simulations.html`. A catalogue
simulation is a standalone HTML file that must not depend on the shared site CSS
or JavaScript. New filenames use lowercase `snake_case`; the legacy `Ink.html`
and `Apple-Frog.html` names remain for link stability.

When you add a catalogue simulation, add its HTML file, its thumbnail under
`assets/` (when appropriate), its catalogue entry, and its documentation entry
together. Keep experimental work out of the public catalogue until it is ready.
See [`../simulations/README.md`](../simulations/README.md) for the catalogue and
conventions.

## Documentation

Update the nearest `README.md` when structure or behaviour changes. Keep
[`../TO-DO.md`](../TO-DO.md) limited to outstanding, actionable work; remove
completed items after verification.
