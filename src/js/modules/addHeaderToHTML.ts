const addHeaderToHTML = function (): void {
	const content = document.querySelector('.content') as HTMLDivElement;

	fetch('header.html')
		.then((res: Response) => {
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			return res.text();
		})
		.then((headerHTML: string) => {
			content.insertAdjacentHTML('afterbegin', headerHTML);
		})
		.catch((error: unknown) => {
			console.error('Помилка завантаження header.html', error)
		});
}

export default addHeaderToHTML;