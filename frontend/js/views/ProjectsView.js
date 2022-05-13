import AbstractView from "./AbstractView.js";
// import images from 'url:..';

export default class ProjectsView extends AbstractView {
	constructor() {
		super();

		this.setTitle("endeavours");
	}

	async getHtml() {
		return `
        <section class="projects">
				<div class="projects__bio-image">
					<h1 class="text-secondary">Endeavours</h1>
				</div>

				<div class="projects__items">
					<div class="projects__item">
                        <h2>Lord Cloths</h2>
						<img src="../../../project-1.jpg" />
						<div class="projects__btns">
							<a
								href="https://thriving-capybara-92904c.netlify.app"
								target="_blank" class="projects__btn"
							>
								<i class="fas fa-eye"></i> Preview
							</a>
							<a
								href="https://github.com/Diegoes7/lord-cloths"
								target="_blank" class="projects__btn"
							>
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Recipes App</h2>
						<img src="../../../project-2.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="https://recipe-power-up.netlify.app" class="projects__btn" target="_blank">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="https://github.com/Diegoes7/recipe-app" class="projects__btn" target="_blank">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Beast Collection</h2>
						<img src="../../../project-3.jpg" target="_blank" alt="My Project" />
						<div class="projects__btns">
							<a href="https://resilient-basbousa-65e249.netlify.app" class="projects__btn" target="_blank">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="https://github.com/Diegoes7/ferocious-beast" class="projects__btn" target="_blank">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Rolling Dices</h2>
						<img src="../../../project-4.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="https://objective-morse-15d0b2.netlify.app" class="projects__btn" target="_blank">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="https://github.com/Diegoes7/RollingDices" class="projects__btn">
								<i class="fab fa-github" target="_blank"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Title</h2>
						<img src="../../../project-5.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="#!" class="projects__btn">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="#!" class="projects__btn">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Title</h2>
						<img src="../../../project-6.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="#!" class="projects__btn">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="#!" class="projects__btn">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
				</div>
			</section>    
        `;
	}
}
