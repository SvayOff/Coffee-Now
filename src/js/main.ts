import '../styles/style.scss';
import addFooterToHTML from "./modules/addFooterToHTML";
import addHeaderToHTML from "./modules/addHeaderToHTML";
import { showSliders } from "./futures/sliders";
import { btnToTop } from "./modules/btnToTop";

document.addEventListener("DOMContentLoaded", () => {
	addHeaderToHTML();
	addFooterToHTML();

	showSliders();

	btnToTop();
});

