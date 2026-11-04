import fs from "node:fs/promises"
import path from "node:path"
import React from "react"
import { renderToString } from "react-dom/server"
import App, { sitePages, getPageSeo, SITE_URL } from "../.tmp-seo/prerender.js"

const root = path.resolve(import.meta.dirname, "..")
const dist = path.join(root, "dist")
const shell = await fs.readFile(path.join(dist, "index.html"), "utf8")
const escape = value => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

function meta(html, key, value, property = false) {
  const attribute = property ? "property" : "name"
  const tag = `<meta ${attribute}="${key}" content="${escape(value)}">`
  const pattern = new RegExp(`<meta\\b[^>]*${attribute}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`, "i")
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `    ${tag}\n  </head>`)
}

globalThis.history = { state: null }
globalThis.localStorage = { getItem: () => "en" }

for (const page of sitePages) {
  globalThis.location = new URL(page.path, SITE_URL)
  const seo = getPageSeo(page.path)
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(seo.title)}</title>`)
  html = html.replace(/<link\b[^>]*rel="canonical"[^>]*>/, `<link rel="canonical" href="${seo.canonical}">`)
  html = meta(html, "description", seo.description)
  html = meta(html, "robots", page.noindex ? "noindex, follow" : "index, follow")
  for (const [key, value] of [["og:title", seo.title], ["og:description", seo.description], ["og:url", seo.canonical]]) html = meta(html, key, value, true)
  for (const [key, value] of [["twitter:title", seo.title], ["twitter:description", seo.description]]) html = meta(html, key, value)
  const schema = page.path === "/"
    ? { "@context": "https://schema.org", "@type": "WebSite", name: "DANSA", alternateName: "DANSA City", url: `${SITE_URL}/`, inLanguage: "en" }
    : { "@context": "https://schema.org", "@type": "WebPage", name: seo.title, description: seo.description, url: seo.canonical, inLanguage: "en", isPartOf: { "@type": "WebSite", name: "DANSA", url: `${SITE_URL}/` } }
  html = html.replace("</head>", `    <script id="site-structured-data" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>\n  </head>`)
  html = html.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`)
  const output = page.path === "/" ? path.join(dist, "index.html") : path.join(dist, page.path.slice(1), "index.html")
  await fs.mkdir(path.dirname(output), { recursive: true })
  await fs.writeFile(output, html)
  // Support hosts that resolve clean URLs to either page.html or page/index.html.
  if (page.path !== "/") await fs.writeFile(path.join(dist, `${page.path.slice(1)}.html`), html)
}

const urls = sitePages.filter(page => !page.noindex).map(page => `  <url><loc>${SITE_URL}${page.path}</loc></url>`).join("\n")
await fs.writeFile(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log(`Prerendered ${sitePages.length} pages and generated the dansa.city sitemap.`)
