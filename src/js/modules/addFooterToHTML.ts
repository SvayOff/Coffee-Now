const addFooterToHTML = function () {
	const wrapper = document.querySelector('.wrapper');

	fetch('footer.html')
		.then(res => {
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			return res.text();
		})
		.then(footerHTML => {
			wrapper?.insertAdjacentHTML('beforeend', footerHTML);
		})
		.catch(error => {
			console.error('Помилка  завантаження footer.html', error);
		});
}

export default addFooterToHTML;