import AbstractView from "./AbstractView.js";

export default class ContactView extends AbstractView {
	constructor() {
		super();

		this.setTitle("summon");
	}

	async getHtml() {
		return `
            <section class="contact">
				<h2>Contact Me 📑</h2>

				<div class="contact__list">
					<div class="contact__email">
						<i class="fas fa-envelope"></i> Ravens Sv.
						<div class="text-secondary">diego.hunter.rv</div>
					</div>
					<div class="contact__phone">
						<i class="fas fa-mobile-alt"></i> Call incantation
						<div class="text-secondary">7🌗 (7💰) 7⚔7-7👾7</div>
					</div>
					<div class="contact__address">
						<i class="fas fa-marker-alt"></i> Address
						<div class="text-secondary">Kaer Morhen, Kaedwen mnt</div>
					</div>
				</div>

				<div class="social-icons">
					<a href="/certificates">
						<i class="fa-solid fa-book-bookmark fa-2x"></i>
					</a>
					<a
						href="https://www.facebook.com/Diegoess77"
						target="_blank"
						id="facebook"
					>
						<i class="fab fa-facebook fa-2x"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/dimitar-dimitrov-b381a51a4/"
						target="_blank"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>
					<a href="https://github.com/Diegoes7" target="_blank" id="github">
						<i class="fab fa-github fa-2x"></i>
					</a>
				</div>
			</section>
    `;
	}
}
