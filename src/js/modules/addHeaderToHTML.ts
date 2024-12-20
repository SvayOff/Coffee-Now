const addHeaderToHTML = function () {
	const content = document.querySelector('.content');

	fetch('header.html')
		.then(res => {
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			return res.text();
		})
		.then(headerHTML => {
			content?.insertAdjacentHTML('afterbegin', headerHTML);
		})
		.catch(error => {
			console.error('Помилка завантаження header.html', error)
		});
}

export default addHeaderToHTML;