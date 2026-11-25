// Fill [data-views-path] slots with GoatCounter pageview counts.
// Counts come from the public visitor counter: <endpoint>counter/<path>.json
(() => {
	const script = document.querySelector("script[data-goatcounter]");
	const endpoint = script?.dataset.goatcounter;
	if (!endpoint) return;

	const base = endpoint.replace(/count\/?$/, "counter/");
	const targets = Array.from(
		document.querySelectorAll(".view-count[data-views-path]"),
	);
	if (targets.length === 0) return;

	const fill = async (element) => {
		let path = element.dataset.viewsPath;
		if (!path) path = window.location.pathname;
		if (!path) return;

		// Ensure path starts with a slash
		if (!path.startsWith("/")) path = `/${path}`;

		try {
			const response = await fetch(`${base}${encodeURIComponent(path)}.json`, {
				headers: { Accept: "application/json" },
			});
			// GoatCounter returns HTTP 404 for paths with 0 views, but still supplies JSON: {"count_unique":"0", "count":"0"}
			if (response.status !== 200 && response.status !== 404) return;

			const data = await response.json();
			const raw = String(data.count ?? "0");
			const count = Number(raw.replace(/,/g, ""));
			if (!Number.isFinite(count) || count < 0) return;

			element.textContent = `${raw} ${count === 1 ? "view" : "views"}`;
			element.setAttribute("title", `${raw} page views via GoatCounter`);
		} catch {
			// Counts are supplementary; a failed request leaves the slot empty.
		}
	};

	// The counter is cached for hours, but keep the request count low on archives.
	let index = 0;
	const worker = async () => {
		while (index < targets.length) await fill(targets[index++]);
	};
	worker();
	worker();
})();
