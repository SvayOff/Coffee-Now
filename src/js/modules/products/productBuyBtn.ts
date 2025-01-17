import { addAnimToBtn } from "../../helpers";

export const productBuyBtn = () => {
	const products = document.querySelectorAll<HTMLElement>('.product__item');

	products.forEach(product => {
		product.addEventListener('click', (e: MouseEvent) => onClickBuyBtn(e, product))
	});

	const onClickBuyBtn = (e: MouseEvent, product: HTMLElement) => {
		const target = e.target as HTMLElement;
		const parent = product.closest<HTMLElement>('.product__item')!;

		if (target.classList.contains('product__item-buy')) {

			addAnimToBtn(parent, 'added-to-cart', 'cart-return');
		}
	}

}