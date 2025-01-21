import '../styles/style.scss';
import {
	addHeaderToHTML,
	addFooterToHTML,
	headerControle,
	showSliders,
	productControle,
	accountControle,
	wishlistControle,
	cartControle
} from "./modules";
import { accordion } from "./helpers";
import { btnToTop, languageControle } from "./futures";

document.addEventListener("DOMContentLoaded", async () => {
	await addHeaderToHTML();
	addFooterToHTML();

	headerControle();

	showSliders();

	btnToTop();

	accordion('faq');

	productControle();

	accountControle();

	languageControle();

	wishlistControle();

	cartControle();
});

