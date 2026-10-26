/* eslint-disable react-refresh/only-export-components -- Server rendering entry, never a browser refresh boundary. */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
export function render(path) {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
  );
}
export { pageSeo } from "./data/seo";
export { BLOGS } from "./data/blogs";
