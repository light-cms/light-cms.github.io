// Keep the embedded Giscus theme aligned with the selected or system theme.

function getGiscusTheme() {
	const attr = document.documentElement.getAttribute("data-theme");
	if (attr === "light") return "light";
	if (attr === "dark") return "dark_dimmed";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark_dimmed"
		: "light";
}

function sendGiscusTheme(theme) {
	const iframe = document.querySelector("iframe.giscus-frame");
	if (!iframe) return;
	iframe.contentWindow.postMessage(
		{ giscus: { setConfig: { theme } } },
		"https://giscus.app",
	);
}

const observer = new MutationObserver(() => {
	sendGiscusTheme(getGiscusTheme());
});
observer.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ["data-theme"],
});

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", () => {
		if (!document.documentElement.hasAttribute("data-theme")) {
			sendGiscusTheme(getGiscusTheme());
		}
	});

// Giscus accepts configuration only after its iframe reports that it is ready.
window.addEventListener("message", function onFirstLoad(event) {
	if (event.origin !== "https://giscus.app") return;
	if (
		event.data?.giscus?.discussion !== undefined ||
		event.data?.giscus?.error !== undefined
	) {
		const status = document.querySelector(".comments-status");
		if (status && event.data?.giscus?.error !== undefined) {
			status.textContent =
				"Discussion could not load. Reload the page to try again.";
			status.classList.add("error-state");
		} else if (status) {
			status.hidden = true;
		}
		sendGiscusTheme(getGiscusTheme());
		window.removeEventListener("message", onFirstLoad);
	}
});
