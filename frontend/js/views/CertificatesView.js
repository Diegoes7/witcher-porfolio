import AbstractView from "./AbstractView.js";

export default class CertificatesView extends AbstractView {
	constructor() {
		super();

		this.setTitle("achievements");
	}

	async getHtml() {
		return `
    <div class="certificates"> 
        <h1 class="achive_title">Achivements</h1>
            <div class="certificates__achive">
                <section class="section_achive">
                    <h2>React Challenge  ✔</h2>
                    <div>
                        <img
                            src="../../../react-certificate.jpg"
                            alt="😈"
                        />
                    </div>
                </section>
                <section class="section_achive">
                    <h2>JavaScript Challenge ✔</h2>
                    <div>
                        <img src="../../../UC-C2D9W0QB.jpg" alt="😈" />
                    </div>
                </section>
                <section class="section_achive">
                    <h2>Algorithms &amp Data Structures  ✔</h2>
                    <div>
                        <img src="../../../master-Algo-DataStructure.jpg" alt="😈" />
                    </div>
                </section>
        </div>
        `;
	}
}
