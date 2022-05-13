import HomeView from "./views/HomeView.js";
import AboutView from "./views/AboutView.js";
import ProjectsView from "./views/ProjectsView.js";
import ContactView from "./views/ContactView.js";
import CertificatesView from "./views/CertificatesView.js";

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: "/", view: HomeView },
		{ path: "/about", view: AboutView },
		{ path: "/projects", view: ProjectsView },
		{ path: "/contact", view: ContactView },
		{path: "/certificates", view: CertificatesView}
	];

	//* Check each routes for match with URL params
	const potentialMatches = routes.map((route) => {
		return { route, isMatch: location.pathname === route.path };
	});

	// return boolean, get which is true
	let match = potentialMatches.find((potentialMacth) => potentialMacth.isMatch);

	if (!match) match = { route: routes[0], isMatch: true };

	const view = new match.route.view();

	document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", (e) => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});
	router();
});
