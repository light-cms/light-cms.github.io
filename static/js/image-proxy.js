/**
 * Dynamically prefixes image src attributes with the WebP image proxy.
 * Proxy: https://fly.webp.se/image?url=<image_url>
 */
(() => {
	const PROXY = "https://fly.webp.se/image?url=";

	function proxyImage(img) {
		if (!img || img.dataset.webpProxied) return;

		const originalSrc = img.getAttribute("src");
		if (
			!originalSrc ||
			originalSrc.startsWith(PROXY) ||
			originalSrc.startsWith("data:") ||
			originalSrc.startsWith("blob:")
		) {
			return;
		}

		let targetUrl = originalSrc;
		try {
			// Resolve relative paths to absolute URL
			targetUrl = new URL(originalSrc, window.location.href).href;
		} catch {
			targetUrl = originalSrc;
		}

		img.dataset.webpProxied = "true";
		img.src = PROXY + targetUrl;

		// Handle srcset if present
		if (img.srcset) {
			img.srcset = img.srcset
				.split(",")
				.map((item) => {
					const parts = item.trim().split(/\s+/);
					if (
						parts[0] &&
						!parts[0].startsWith(PROXY) &&
						!parts[0].startsWith("data:")
					) {
						try {
							parts[0] = PROXY + new URL(parts[0], window.location.href).href;
						} catch {
							parts[0] = PROXY + parts[0];
						}
					}
					return parts.join(" ");
				})
				.join(", ");
		}
	}

	function run() {
		const images = document.querySelectorAll("img");
		for (let i = 0; i < images.length; i++) {
			proxyImage(images[i]);
		}
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}

	// Observe dynamic DOM changes (e.g. infinite scroll, lazy rendering)
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			for (const node of mutation.addedNodes) {
				if (node.nodeType === Node.ELEMENT_NODE) {
					if (node.tagName === "IMG") {
						proxyImage(node);
					} else if (node.querySelectorAll) {
						const nested = node.querySelectorAll("img");
						for (let i = 0; i < nested.length; i++) {
							proxyImage(nested[i]);
						}
					}
				}
			}
		}
	});

	observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
	});
})();
