/**
 * Server-render entry used ONLY by the build (scripts/prerender.mjs).
 *
 * It renders the same <AppShell /> the browser mounts, inside a
 * MemoryRouter pinned to the requested URL, and returns an HTML string.
 * Because it is the same tree, the static HTML a crawler receives and the
 * page a reader hydrates describe the same content.
 */
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { AppShell } from "./App";

/**
 * @param {string} url  Route to render, e.g. "/blog/" or "/blog/my-article"
 * @returns {string}    HTML for the #root container
 */
export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppShell />
    </MemoryRouter>
  );
}

export default render;
