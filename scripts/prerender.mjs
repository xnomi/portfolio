import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
try {
  const { render, pageSeo, BLOGS } = await server.ssrLoadModule(
    "/src/entry-server.jsx",
  );
  const template = await readFile("dist/index.html", "utf8");
  const routes = ["/", "/work", "/blog", ...BLOGS.map((post) => `/blog/${post.slug}`)];
  for (const route of routes) {
    const seo = pageSeo(route);
    let html = template.replace(
      /<title>.*?<\/title>/s,
      `<title>${escape(seo.title)}</title>`,
    );
    for (const [attribute, name, value] of [
      ["name", "description", seo.description],
      ["property", "og:title", seo.title],
      ["property", "og:description", seo.description],
      ["property", "og:url", seo.url],
      ["property", "og:image", seo.image],
      ["property", "og:type", seo.type],
      ["name", "twitter:title", seo.title],
      ["name", "twitter:description", seo.description],
      ["name", "twitter:image", seo.image],
    ]) {
      html = html.replace(
        new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*/?>`),
        `<meta ${attribute}="${name}" content="${escape(value)}" />`,
      );
    }
    html = html.replace(
      /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g,
      "",
    );
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${escape(seo.url)}" /><script id="page-schema" type="application/ld+json">${JSON.stringify(seo.schema).replaceAll("<", "\\u003c")}</script></head>`,
    );
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${render(route)}</div>`,
    );
    const directory = path.join("dist", route);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
  }
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${pageSeo(route).url}</loc></url>`).join("")}</urlset>`,
  );
  console.log(`Prerendered ${routes.length} pages with route-specific SEO.`);
} finally {
  await server.close();
}
