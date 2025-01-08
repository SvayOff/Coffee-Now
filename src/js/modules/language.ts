export const languageControle = (): void => {
	const language = document.querySelector<HTMLDivElement>('.header__lang')!;
	const languageTitle = document.querySelector<HTMLButtonElement>('.header__lang-title_btn');

	const langDefault: LangType = {
		langName: 'Українська',
		lang: 'ua'
	};

	type LangType = {
		langName: string;
		lang: string;
	};

	const onClickLanguage = (e: Event): void => {
		const target = e.target as HTMLElement;

		toggleLanguagePopup(target);

		choiseLanguage(target);
	}

	const toggleLanguagePopup = (target: HTMLElement): void => {
		if (target.classList.contains('header__lang-title_btn')) {
			language.classList.toggle('show');
		}
	}


	const clickOutsideLanguage = (e: Event): void => {
		const target = e.target as HTMLElement;

		if (target && !target.closest('.header__lang')) {
			closeLanguagePopup();
		};
	}

	const choiseLanguage = (target: HTMLElement): void => {
		if (target.classList.contains('header__lang-item_btn') && target.dataset.lang) {
			langDefault.langName = target.innerText;
			langDefault.lang = target.dataset.lang;

			setDefaultLanguage();
			closeLanguagePopup();
		};
	};

	const setDefaultLanguage = (): void => {
		if (languageTitle) {
			languageTitle.textContent = langDefault.langName;
			languageTitle.dataset.lang = langDefault.lang;
		}
	}

	const closeLanguagePopup = (): void => {
		language.classList.remove('show');
	};

	setDefaultLanguage();

	language.addEventListener('click', (e: Event) => onClickLanguage(e));
	document.addEventListener('click', (e: Event) => clickOutsideLanguage(e));
};