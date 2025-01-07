const addHeaderToHTML = async function (): Promise<void> {
	const content = document.querySelector('.content') as HTMLDivElement;

	try {
		const res = await fetch('header.html');

		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const headerHTML = await res.text();
		content.insertAdjacentHTML('afterbegin', headerHTML);
	} catch (error: unknown) {
		console.error('Помилка завантаження header.html', error);
	}
}

export default addHeaderToHTML;