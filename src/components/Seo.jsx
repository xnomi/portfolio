import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageSeo } from "../data/seo";
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const seo = pageSeo(pathname);
    document.title = seo.title;
    const set = (selector, attributes) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement(
          selector.startsWith("link") ? "link" : "meta",
        );
        document.head.append(node);
      }
      Object.entries(attributes).forEach(([key, value]) =>
        node.setAttribute(key, value),
      );
    };
    set('link[rel="canonical"]', { rel: "canonical", href: seo.url });
    set('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    for (const [key, value] of Object.entries({
      title: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image,
      type: seo.type,
    }))
      set(`meta[property="og:${key}"]`, {
        property: `og:${key}`,
        content: value,
      });
    for (const [key, value] of Object.entries({
      title: seo.title,
      description: seo.description,
      image: seo.image,
    }))
      set(`meta[name="twitter:${key}"]`, {
        name: `twitter:${key}`,
        content: value,
      });
    const schema =
      document.getElementById("page-schema") ||
      document.createElement("script");
    schema.id = "page-schema";
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify(seo.schema);
    document.head.append(schema);
  }, [pathname]);
  return null;
}
