export const addAnimToBtn = (
	parentEl: HTMLElement,
	animAddedClassName: string,
	animEndedClassName: string
) => {
	parentEl.classList.add(animAddedClassName);

	setTimeout(() => {
		parentEl.classList.remove(animAddedClassName);
		parentEl.classList.add(animEndedClassName);

		setTimeout(() => parentEl.classList.remove(animEndedClassName), 400);
	}, 600);
};