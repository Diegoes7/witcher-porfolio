import AbstractView from "./AbstractView.js";

export default class HomeView extends AbstractView {
	constructor() {
		super();

		this.setTitle("Diego's space")
	}

	async getHtml() {
		return `
			<section class="home">
				<h2>Hey, They Call Me</h2>
				<h1 class="home__name">
					Diego <span class="home__name--last">El Rey </span>
				</h1>
				<h2>
					<span class="home__name--last">Web Developer</span>, JS and React
					Apprentice
				</h2>

				<div class="social-icons">
					<a href="/certificates" data-link>
						<i class="fa-solid fa-book-bookmark fa-2x"></i>
					</a>
					<a
						href="https://www.facebook.com/Diegoess77"
						target="_blank"
						id="facebook"
					>
						<i class="fab fa-facebook fa-2x"></i>
					</a>
					<a href="https://www.linkedin.com/in/dimitar-dimitrov-b381a51a4/" target="_blank">
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>
					<a href="https://github.com/Diegoes7" target="_blank" id="github">
						<i class="fab fa-github fa-2x"></i>
					</a>
				</div>
				<footer class="footer">&copy; Copyright 2022</footer>
			</section>    
        `;
	}
}
