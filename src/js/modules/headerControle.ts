const headerControle = () => {
	const header = document.querySelector<HTMLDivElement>('.header')!;

	const addActiveClassByScroll = (e: Event) => {
		const target = e.target as HTMLElement;

		if (target.scrollTop >= 1) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	};

	document.body.addEventListener('scroll', (e: Event) => addActiveClassByScroll(e));
};

export default headerControle;


