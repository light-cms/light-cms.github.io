/**
 * Syncs the giscus comment widget theme with the site's dark/sepia toggle.
 *
 * Giscus runs in an iframe and can be updated via postMessage.
 * We map the site's [data-theme] attribute to a giscus theme:
 *   light  → "light"
 *   dark   → "dark_dimmed"  (closest warm/dimmed dark to sepia)
 *   system → matches OS preference
 */

function getGiscusTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light") return "light";
  if (attr === "dark") return "dark_dimmed";
  // "system" or no attribute: follow OS
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark_dimmed"
    : "light";
}

function sendGiscusTheme(theme) {
  const iframe = document.querySelector("iframe.giscus-frame");
  if (!iframe) return;
  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme } } },
    "https://giscus.app"
  );
}

// Watch for data-theme attribute changes on <html>
const observer = new MutationObserver(() => {
  sendGiscusTheme(getGiscusTheme());
});
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

// Also watch OS preference changes (for "system" mode)
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    // Only act if not pinned to a specific theme
    if (!document.documentElement.hasAttribute("data-theme")) {
      sendGiscusTheme(getGiscusTheme());
    }
  });

// Giscus iframe isn't present immediately — wait for it to load, then set theme
window.addEventListener("message", function onFirstLoad(event) {
  if (event.origin !== "https://giscus.app") return;
  if (event.data?.giscus?.discussion !== undefined ||
    event.data?.giscus?.error !== undefined) {
    // Iframe is ready
    sendGiscusTheme(getGiscusTheme());
    window.removeEventListener("message", onFirstLoad);
  }
});
