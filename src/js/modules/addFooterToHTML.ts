const addFooterToHTML = function (): void {
	const wrapper = document.querySelector('.wrapper') as HTMLDivElement;

	fetch('footer.html')
		.then((res: Response) => {
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			return res.text();
		})
		.then((footerHTML: string) => {
			wrapper.insertAdjacentHTML('beforeend', footerHTML);
		})
		.catch((error: unknown) => {
			console.error('Помилка  завантаження footer.html', error);
		});
}

export default addFooterToHTML;