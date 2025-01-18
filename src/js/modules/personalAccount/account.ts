import { onClickOutsidePopup } from "../../helpers";

const accountControle = (): void => {
	const account = document.querySelector<HTMLDivElement>('.header__account');

	if (account) {
		const onClickAccount = (e: MouseEvent): void => {
			const target = e.target as HTMLElement;

			toggleAccountPopup(target);
		};

		const toggleAccountPopup = (target: HTMLElement): void => {
			if (target.classList.contains('header__account-personal')) {
				account.classList.toggle("show");
			}
		}

		const closeAccountPopup = (): void => {
			account.classList.remove('show');
		}

		account.addEventListener('click', (e: MouseEvent) => onClickAccount(e));
		document.addEventListener('click', (e: MouseEvent) => onClickOutsidePopup(e, 'header__account', closeAccountPopup));
	}
};

export default accountControle;