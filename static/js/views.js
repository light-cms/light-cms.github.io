// Fill [data-views-path] slots with GoatCounter pageview counts.
// Counts come from the public visitor counter: <endpoint>counter/<path>.json
(() => {
	const script = document.querySelector("script[data-goatcounter]");
	const endpoint = script?.dataset.goatcounter;
	if (!endpoint) return;

	const base = endpoint.replace(/count$/, "counter/");
	const targets = Array.from(
		document.querySelectorAll(".view-count[data-views-path]"),
	);
	if (targets.length === 0) return;

	const fill = async (element) => {
		const path = element.dataset.viewsPath;
		if (!path) return;

		try {
			const response = await fetch(`${base}${encodeURIComponent(path)}.json`, {
				headers: { Accept: "application/json" },
			});
			if (!response.ok) return;

			const data = await response.json();
			const raw = String(data.count ?? "");
			const count = Number(raw.replace(/,/g, ""));
			// Unknown paths and disabled counters report 0; leave the slot empty.
			if (!Number.isFinite(count) || count < 1) return;

			element.textContent = `${raw} ${count === 1 ? "view" : "views"}`;
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
