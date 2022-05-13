const menuBtn = document.querySelector(".menu-btn");
const hamburgur = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		hamburgur.classList.add("open");
		nav.classList.add("open");
		menuNav.classList.add("open");
		navItems.forEach((item) => item.classList.add("open"));

		showMenu = true;
	} else {
		hamburgur.classList.remove("open");
		nav.classList.remove("open");
		menuNav.classList.remove("open");
		navItems.forEach((item) => item.classList.remove("open"));

		showMenu = false;
	}
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector(".nav").style.top = "0";
	} else {
		document.querySelector("nav").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", () => {
	var element = document.querySelectorAll(".menu-nav__item");

	if (element) {
		element.forEach((el, key) => {
			el.addEventListener("click", () => {
				el.classList.toggle("active");

				element.forEach((ell, els) => {
					if (key !== els) ell.classList.remove("active");
				});
			});
		});
	}
});
