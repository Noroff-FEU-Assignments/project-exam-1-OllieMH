const hamburger = document.querySelector(".mobile");
const navLinks = document.querySelector(".navlinks");

function toggleActive() {
	navLinks.classList.toggle("active");
}

hamburger.addEventListener("change", toggleActive);
