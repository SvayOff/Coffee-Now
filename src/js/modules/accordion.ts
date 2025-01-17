export const accordion = (className: string) => {
	const accordionList = document.querySelector(`.${className}__list`) as HTMLOListElement || null;

	accordionList?.addEventListener('click', (e: MouseEvent) => toggleAccordionItems(e))

	const toggleAccordionItems = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		const parent = target.closest(`.${className}__item`) as HTMLLIElement
		const items = Array.from(accordionList.children) as HTMLLIElement[];

		items.forEach((item) => item !== parent && item.classList.remove('show'));

		if (target.classList.contains(`${className}__item-button`)) {
			parent.classList.toggle('show');
		}
	};
}