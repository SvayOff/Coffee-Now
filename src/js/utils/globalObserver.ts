import { languageControle } from "../futures/language";

const globalObserver = (): void => {
	const observer = new MutationObserver(() => {
		const header = document.querySelector<HTMLDivElement>('.header');

		if (header) {
			languageControle();

			observer.disconnect();
		}
	});

	observer.observe(document.body, { childList: true, subtree: true });
}

export default globalObserver;