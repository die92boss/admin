const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

function applyTheme(theme) {
	if (theme === "dark") {
		htmlElement.classList.add("dark");
		themeToggle.setAttribute("title", "Passa a Light Mode");
		themeToggle.setAttribute("aria-label", "Switch to light mode");
	} else {
		htmlElement.classList.remove("dark");
		themeToggle.setAttribute("title", "Passa a Dark Mode");
		themeToggle.setAttribute("aria-label", "Switch to dark mode");
	}
}

function toggleTheme() {
	const currentIsDark = htmlElement.classList.contains("dark");
	const newTheme = currentIsDark ? "light" : "dark";
	applyTheme(newTheme);
	localStorage.setItem("themePreference", newTheme);
}

// --- Copy to Clipboard Functionality ---
document.querySelectorAll(".copy-btn").forEach((button) => {
	button.addEventListener("click", () => {
		// Find the previous sibling element which is the <pre>
		const codeBlock = button.previousElementSibling;
		// Inside <pre>, there is a <code>
		const textToCopy = codeBlock.innerText;

		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				const originalText = button.textContent;
				button.textContent = "Copiato!";
				button.classList.add("text-green-600", "dark:text-green-400");
				button.classList.remove(
					"text-slate-600",
					"dark:text-slate-300",
					"hover:text-blue-600",
					"dark:hover:text-blue-400",
				);

				setTimeout(() => {
					button.textContent = originalText;
					button.classList.remove(
						"text-green-600",
						"dark:text-green-400",
					);
					button.classList.add(
						"text-slate-600",
						"dark:text-slate-300",
						"hover:text-blue-600",
						"dark:hover:text-blue-400",
					);
				}, 2000);
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
				button.textContent = "Errore";
			});
	});
});

const savedTheme = localStorage.getItem("themePreference");
const systemPrefersDark = window.matchMedia(
	"(prefers-color-scheme: dark)",
).matches;

if (savedTheme) {
	applyTheme(savedTheme);
} else {
	applyTheme(systemPrefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", toggleTheme);

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (e) => {
		if (!localStorage.getItem("themePreference")) {
			applyTheme(e.matches ? "dark" : "light");
		}
	});

// --- Scroll Spy with Sliding Marker ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const navMarker = document.getElementById("navMarker");

function highlightNavigation() {
	let scrollY = window.scrollY;
	let activeLink = null;

	// Check if we've reached the bottom of the page
	if (
		window.innerHeight + Math.ceil(scrollY) >=
		document.body.offsetHeight - 10
	) {
		const lastSectionId =
			sections[sections.length - 1].getAttribute("id");
		navLinks.forEach((link) => {
			if (link.getAttribute("href").includes(lastSectionId)) {
				activeLink = link;
			}
		});
	} else {
		// Greedy selection: Find the last section that has been scrolled past
		sections.forEach((current) => {
			const sectionTop = current.offsetTop - 150; // Offset for header
			const sectionId = current.getAttribute("id");

			if (scrollY >= sectionTop) {
				navLinks.forEach((link) => {
					if (link.getAttribute("href").includes(sectionId)) {
						activeLink = link;
					}
				});
			}
		});
	}

	if (activeLink) {
		// Update Text Styles
		navLinks.forEach((link) => {
			link.classList.remove(
				"text-blue-600",
				"dark:text-blue-400",
				"font-medium",
			);
			link.classList.add("text-slate-500", "dark:text-slate-400");
		});
		activeLink.classList.remove("text-slate-500", "dark:text-slate-400");
		activeLink.classList.add(
			"text-blue-600",
			"dark:text-blue-400",
			"font-medium",
		);

		// Update Sliding Marker Position
		// The marker is absolute relative to the 'relative' div wrapper.
		// The ul has no top margin/padding, so link.parentElement.offsetTop works best.

		navMarker.style.height = `${activeLink.offsetHeight}px`;
		navMarker.style.top = `${activeLink.offsetTop}px`;
		navMarker.classList.remove("opacity-0");
	} else {
		// No active section (e.g., at the top of the page)
		navMarker.classList.add("opacity-0");
		navLinks.forEach((link) => {
			link.classList.remove(
				"text-blue-600",
				"dark:text-blue-400",
				"font-medium",
			);
			link.classList.add("text-slate-500", "dark:text-slate-400");
		});
	}
}
// Trigger once on load to set initial position
setTimeout(highlightNavigation, 100);
window.addEventListener("scroll", highlightNavigation);

// Initialize Lucide Icons
lucide.createIcons();
