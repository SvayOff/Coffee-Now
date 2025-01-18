const onClickOutsidePopup = (
	e: MouseEvent,
	className: string,
	closePopupFn: () => void
): void => {
	const target = e.target as HTMLElement;

	if (target && !target.closest(`.${className}`)) {
		closePopupFn();
	};
};

export default onClickOutsidePopup;