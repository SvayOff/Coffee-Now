export const languageControle = (): void => {
	const language = document.querySelector<HTMLDivElement>('.header__lang')!;

	const langDefault = {
		langName: 'Українська',
		lang: 'ua'
	};

	language.addEventListener('click', (e: Event) => onClickLanguage(e));

	const onClickLanguage = (e: Event) => {
		const target = e.target as HTMLElement;

		toggleLanguagePopup(target);
	}

	const toggleLanguagePopup = (target: HTMLElement): void => {
		if (target.classList.contains('header__lang-title')) {
			language.classList.toggle('show');
		}
	}

	document.addEventListener('click', (e: Event) => {
		const target = e.target as HTMLElement;

		if (target && !target.closest('.header__lang')) {
			language.classList.remove('show');
		};
	});

	const choiseLanguage = (target: HTMLElement) => {
		if (target.classList.contains('header__lang-')) {
			
		};
	};
};