import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Run with Bun: HTMLRewriter parses actual HTML, including quoted URLs/entities.
const root = resolve(process.argv[2] ?? fileURLToPath(new URL('../', import.meta.url)));
const errors = [];
const documents = new Map();
let checked = 0;

async function collect(directory) {
  const files = await readdir(directory, { withFileTypes: true });
  for (const file of files) {
    if (file.name.startsWith('.') || file.name === 'node_modules') continue;
    const path = resolve(directory, file.name);
    if (file.isDirectory()) await collect(path);
    else if (['.html', '.md'].includes(extname(path))) {
      documents.set(path, { text: await readFile(path, 'utf8'), ids: new Set(), links: [] });
    }
  }
}

async function parse(document, html) {
  await new HTMLRewriter().on('*', {
    element(element) {
      const id = element.getAttribute('id');
      if (id) document.ids.add(id);
      for (const attribute of ['href', 'src']) {
        const value = element.getAttribute(attribute);
        if (value) document.links.push(value);
      }
    },
  }).transform(new Response(html)).text();
}

await collect(root);
const components = await readFile(resolve(root, 'site-components.js'), 'utf8');
const templates = [...components.matchAll(/const (?:headerHTML|footerHTML) = `([\s\S]*?)`;/g)];
if (templates.length !== 2) errors.push('Expected headerHTML and footerHTML templates in site-components.js');
for (const [path, document] of documents) {
  if (extname(path) === '.html') {
    await parse(document, document.text);
    if (document.text.includes('site-components.js')) {
      const basePath = dirname(path) === root ? '' : '../';
      for (const template of templates) await parse(document, template[1].replaceAll('${basePath}', basePath));
    }
  } else {
    // Documentation uses inline Markdown links; strip fenced examples first.
    const prose = document.text.replace(/```[\s\S]*?```/g, '');
    document.links.push(...[...prose.matchAll(/!?\[[^\]\n]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)].map(match => match[1]));
  }
}

for (const [path, document] of documents) {
  for (const href of document.links) {
    const label = `${relative(root, path)}: ${href}`;
    let url;
    try {
      url = new URL(href, `https://activeinference.org/${relative(root, path).split(sep).join('/')}`);
    } catch {
      errors.push(`${label} — invalid URL`);
      continue;
    }
    if (url.origin !== 'https://activeinference.org') continue;
    checked++;
    let destination;
    try {
      destination = resolve(root, '.' + decodeURIComponent(url.pathname));
      if (destination !== root && !destination.startsWith(root + sep)) throw new Error('path leaves site root');
      if ((await stat(destination)).isDirectory()) destination = resolve(destination, 'index.html');
      if (!(await stat(destination)).isFile()) throw new Error('not a file');
    } catch (error) {
      errors.push(`${label} — missing local file (${error.message})`);
      continue;
    }
    if (url.hash && extname(destination) === '.html') {
      let anchor;
      try { anchor = decodeURIComponent(url.hash.slice(1)); }
      catch { errors.push(`${label} — invalid fragment encoding`); continue; }
      if (!documents.get(destination)?.ids.has(anchor)) errors.push(`${label} — missing anchor #${anchor}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`FAIL: ${errors.length} problems across ${documents.size} documents (${checked} local references).`);
  process.exitCode = 1;
} else {
  console.log(`PASS: ${documents.size} documents, ${checked} local references (including shared navigation).`);
}
