# Noman Ashraf — portfolio

React + Vite portfolio with responsive project browsing, services, résumé downloads, a development journal, and an AI assistant.

## Local development

```sh
npm ci
npm run dev
```

## Production and verification

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:ui
```

The build pre-renders the home page, journal index, and every article into `dist`. Each page includes its content, unique metadata, canonical URL, and JSON-LD before JavaScript runs. The sitemap is generated from the same article data. Tests start the preview server automatically and cover six viewport widths (320–1440px), navigation, filtering, theme switching, résumé access, and SEO.

## Content

- `src/pages/HomePage.jsx`: introduction, services, about, and contact links.
- `src/data/projects.jsx`: project descriptions, screenshots, categories, and links.
- `src/data/blogs.js`: journal articles.
- `src/data/seo.js`: public domain, social profiles, page metadata, and structured data.
- `src/styles/portfolio.css`: responsive portfolio design and motion.
- `public/doc/`: downloadable résumé.

The public domain is `https://nomidev.app`. Change `SITE` in `src/data/seo.js` if the domain changes. Contact buttons open the visitor’s email or phone app. The AI assistant still uses the existing `/api/chat` endpoint and requires the server environment configured for that integration. Do not commit environment secrets.

Deploy the `dist` output with the existing Vercel configuration. Confirm the production domain in Search Console and request indexing after deployment; ranking and indexing are controlled by search engines.
