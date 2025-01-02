import '../styles/style.scss';
import addFooterToHTML from "./modules/addFooterToHTML";
import addHeaderToHTML from "./modules/addHeaderToHTML";
import { showSliders } from "./futures/sliders";

document.addEventListener("DOMContentLoaded", () => {
	addHeaderToHTML();
	addFooterToHTML();

	showSliders();
});

