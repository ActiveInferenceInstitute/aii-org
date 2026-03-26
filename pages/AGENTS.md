# AGENTS.md — Site Pages Directory

## Architecture

These are standard layout pages that depend heavily on root components. They are NOT standalone.

Every page in this directory MUST include the following in its `<head>`:
```html
<link rel="stylesheet" href="../site.css">
```

And MUST include at the end of `<body>`:
```html
<script src="../site-components.js"></script>
```

The injection mount points `<div id="site-header"></div>` and `<div id="site-footer"></div>` must be present.

Images and assets are referenced relative to the parent directory: `../assets/`
