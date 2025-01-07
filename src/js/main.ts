import '../styles/style.scss';
import addFooterToHTML from "./modules/addFooterToHTML";
import addHeaderToHTML from "./modules/addHeaderToHTML";
import productControle from "./modules/products/products";
import showSliders from "./modules/sliders/sliders";
import { btnToTop } from "./modules/btnToTop";
import { accordion } from './modules/accordion';
import { languageControle } from "./modules/language";

document.addEventListener("DOMContentLoaded", async () => {
	await addHeaderToHTML();
	addFooterToHTML();

	showSliders();

	btnToTop();

	accordion('faq');

	productControle();

	languageControle();
});

