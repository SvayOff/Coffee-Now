const btn = document.querySelector('.button__to-top') as HTMLButtonElement;

export const btnToTop = () => {
	const scrollToTop = (e: Event) => {
		document.body.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	const showBtn = (btn: HTMLButtonElement) => {
		const scrollFromTop = document.body.scrollTop;

		if (scrollFromTop >= 250) {
			btn.classList.add('show');
		} else {
			btn.classList.remove('show');
		}
	}

	document.body.addEventListener('scroll', () => showBtn(btn));
	btn.addEventListener('click', (e) => scrollToTop(e));
};

