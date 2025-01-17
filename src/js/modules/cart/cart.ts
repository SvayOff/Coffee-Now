import { onClickOutsidePopup } from "../../helpers/onClickOutsidePopup";

export const cartControle = (): void => {
	const cart = document.querySelector<HTMLDivElement>('.cart')!;

	const onClickCart = (e: MouseEvent): void => {
		const target = e.target as HTMLElement;

		toggleCartPopup(target);
	};

	const toggleCartPopup = (target: HTMLElement): void => {
		if (
			target.classList.contains('cart__icon') ||
			target.classList.contains('cart__close')
		) {
			cart.classList.toggle('show');
		};
	}

	const closeCartPopup = (): void => {
		cart.classList.remove('show');
	}

	cart.addEventListener('click', (e: MouseEvent) => onClickCart(e));
	document.addEventListener('click', (e: MouseEvent) => onClickOutsidePopup(e, 'cart', closeCartPopup));
};