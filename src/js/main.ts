import '../styles/style.scss';
import './futures/sliders'
import addFooterToHTML from "./modules/addFooterToHTML";
import addHeaderToHTML from "./modules/addHeaderToHTML";

document.addEventListener("DOMContentLoaded", () => {
	addHeaderToHTML();
	addFooterToHTML();
});

