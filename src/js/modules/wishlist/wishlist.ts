import { onClickOutsidePopup } from "../../helpers";

const wishlistControle = (): void => {
	const wishlist = document.querySelector<HTMLDivElement>('.wishlist')!;

	const onClickWishlist = (e: MouseEvent): void => {
		const target = e.target as HTMLElement;

		toggleWishlistPopup(target);
	};

	const toggleWishlistPopup = (target: HTMLElement): void => {
		if (
			target.classList.contains('wishlist__icon') ||
			target.classList.contains('wishlist__close')
		) {
			wishlist.classList.toggle('show');
		};
	};

	const closeWishlistPopup = (): void => {
		wishlist.classList.remove('show');
	};

	wishlist.addEventListener('click', (e: MouseEvent) => onClickWishlist(e));
	document.addEventListener('click', (e: MouseEvent) => onClickOutsidePopup(e, 'wishlist', closeWishlistPopup));
};

export default wishlistControle;