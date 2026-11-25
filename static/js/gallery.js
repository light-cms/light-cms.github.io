(() => {
	const container = document.getElementById("gallery-content");
	const dialog = document.getElementById("gallery-lightbox");
	const lightboxImage = document.getElementById("lightbox-img");
	const lightboxCaption = document.getElementById("lightbox-caption");
	const closeButton = dialog?.querySelector(".lightbox-close");
	let lastTrigger = null;

	if (!container || !dialog || !lightboxImage || !lightboxCaption) return;

	function openLightbox(trigger, image) {
		lastTrigger = trigger;
		lightboxImage.src = image.currentSrc || image.src;
		lightboxImage.alt = image.alt;
		lightboxCaption.textContent = image.alt || "Full-size gallery image";
		dialog.showModal();
		closeButton?.focus();
	}

	function createCard(sourceImage) {
		const figure = document.createElement("figure");
		figure.className = "gallery-card";

		const mediaButton = document.createElement("button");
		mediaButton.type = "button";
		mediaButton.className = "gallery-media";
		mediaButton.setAttribute(
			"aria-label",
			`View ${sourceImage.alt || "gallery image"} at full size`,
		);

		const image = document.createElement("img");
		image.src = sourceImage.currentSrc || sourceImage.src;
		image.alt = sourceImage.alt || "";
		image.width = Number(sourceImage.getAttribute("width")) || 960;
		image.height = Number(sourceImage.getAttribute("height")) || 600;
		image.loading = "lazy";
		image.decoding = "async";
		mediaButton.appendChild(image);

		const viewLabel = document.createElement("span");
		viewLabel.className = "gallery-view-label";
		viewLabel.textContent = "View full image";
		mediaButton.appendChild(viewLabel);
		mediaButton.addEventListener("click", () =>
			openLightbox(mediaButton, image),
		);

		image.addEventListener("error", () => {
			mediaButton.disabled = true;
			mediaButton.classList.add("is-unavailable");
			viewLabel.textContent = "Image unavailable";
		});

		figure.appendChild(mediaButton);
		const caption = sourceImage.alt || sourceImage.title;
		if (caption) {
			const figcaption = document.createElement("figcaption");
			figcaption.className = "gallery-caption";
			figcaption.textContent = caption;
			figure.appendChild(figcaption);
		}

		return figure;
	}

	const elements = Array.from(container.children);
	let currentGrid = null;
	let imageCount = 0;

	for (const element of elements) {
		const images = element.querySelectorAll("img");
		const containsOnlyImages =
			element.tagName === "P" &&
			images.length > 0 &&
			element.textContent.trim() === "";

		if (!containsOnlyImages) {
			currentGrid = null;
			continue;
		}

		if (!currentGrid) {
			currentGrid = document.createElement("div");
			currentGrid.className = "gallery-grid";
			element.parentNode.insertBefore(currentGrid, element);
		}

		for (const image of images) {
			currentGrid.appendChild(createCard(image));
			imageCount += 1;
		}
		element.remove();
	}

	if (imageCount === 0) {
		document.getElementById("gallery-empty")?.removeAttribute("hidden");
	}

	closeButton?.addEventListener("click", () => dialog.close());
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) dialog.close();
	});
	dialog.addEventListener("close", () => lastTrigger?.focus());
})();
