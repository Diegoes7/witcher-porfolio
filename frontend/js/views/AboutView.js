import AbstractView from "./AbstractView.js";

export default class AboutView extends AbstractView {
	constructor() {
		super();

		this.setTitle("history")
	}

	async getHtml() {
        return `
			<section class="about">
				<div class="about__bio-image">
					<div class="about__bio">
						<h2 class="text-secondary">BIO</h2>
						<p>
							Born and raised in shattered world, split by Cataclyms. Didn't remember much of my childhood. My first memory is in the castle, where I was trained by best monster hunters in the realm. My body and my soul was broken, went to endless hardships. Trials and constant training make me the way I am now. Life in castle transform me in a miraculous way, forged me in a unstoppable weapon. Now I travel and look for advnture and gold, of course.
						</p>
					</div>
				</div>

				<div class="jobs">
					<div class="jobs__job">
						<h2 class="text-secondary">201 ac - Current</h2>
						<h3>King Foltest</h3>
						<h6>Monser hunter</h6>
						<p>
							Pretty much killing what monter show in my way. Standard staff, nothing fancy. Guard villeges from attacks. It's a llitle bit borring, but the pay is good, wine too.
						</p>
					</div>
					<div class="jobs__job">
						<h2 class="text-secondary">184 ac - 200 ac</h2>
						<h3>No particular employer</h3>
						<h6>Freelancer</h6>
						<p>
							Get what job, jump araound the corner. Somethimes have monster to slay, sometimes just calm the people fears. In a very rare cases have gold.In some cases lift curses, save lives, that's better than killing, but rare in these lands. Complete 777 assignments, lucky number, right.
						</p>
					</div>
					<div class="jobs__job">
						<h2 class="text-secondary">170 ac - 177 ac</h2>
						<h3>King Emhyr</h3>
						<h6>Butcher</h6>
						<p>
							In my early days, I was a little bit unexpitienced hunter and most of the time left behind me a pretty big mess.Cross the country and kill monsters, most of the time.  
						</p>
					</div>
				</div>
			</section>
        
        
        `
    }
}