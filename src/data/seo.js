import { BLOGS } from "./blogs";
export const SITE = "https://nomidev.app";
export function pageSeo(pathname) {
  const post = BLOGS.find((p) => pathname === `/blog/${p.slug}`);
  const title = post
    ? `${post.title} | Noman Ashraf`
    : pathname === "/blog"
      ? "AI & Development Journal | Noman Ashraf"
      : "Noman Ashraf | Full Stack Developer & AI Automation Engineer";
  const description = post
    ? post.excerpt
    : pathname === "/blog"
      ? "Notes on AI agents, LangGraph, CrewAI, and software development by Muhammad Noman Ashraf."
      : "Hire Muhammad Noman Ashraf for React and Node.js development, AI agents, n8n workflow automation, and Flutter apps. Explore projects and download his résumé.";
  const url = SITE + pathname;
  const image = post?.image || `${SITE}/images/profile_photo.png`;
  const person = {
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: "Muhammad Noman Ashraf",
    url: SITE,
    image: `${SITE}/images/profile_photo.png`,
    jobTitle: "Full Stack Developer & AI Automation Engineer",
    email: "mailto:nomi.devx@gmail.com",
    telephone: "+923319025470",
    address: { "@type": "PostalAddress", addressCountry: "PK" },
    sameAs: [
      "https://github.com/NomiDevx",
      "https://www.linkedin.com/in/nomidevx",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "Python",
      "LangGraph",
      "CrewAI",
      "n8n",
      "Flutter",
    ],
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Noman Ashraf",
        publisher: { "@id": person["@id"] },
      },
      post
        ? {
            "@type": "BlogPosting",
            headline: post.title,
            description,
            image,
            url,
            datePublished: new Date(post.date).toISOString().slice(0, 10),
            author: { "@id": person["@id"] },
            mainEntityOfPage: url,
          }
        : {
            "@type": pathname === "/blog" ? "CollectionPage" : "ProfilePage",
            url,
            name: title,
            description,
            mainEntity: { "@id": person["@id"] },
          },
      ...(pathname === "/"
        ? [
            {
              "@type": "OfferCatalog",
              name: "Development and automation services",
              itemListElement: [
                "Full stack web development",
                "AI agent development",
                "n8n workflow automation",
                "Flutter mobile app development",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name,
                  provider: { "@id": person["@id"] },
                },
              })),
            },
          ]
        : []),
    ],
  };
  return {
    title,
    description,
    url,
    image,
    type: post ? "article" : "website",
    schema,
  };
}
