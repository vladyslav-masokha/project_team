const searchAuthours = () => {
	const fieldSearch = document.querySelector('.fieldSearchAuthours');
	const searchAuthour = document.querySelectorAll('.searchAuthoursOption dt');

	fieldSearch.addEventListener('input', () => {
		const inputValue = fieldSearch.value.toLowerCase();

		searchAuthour.forEach(authour => {
			const authourName = authour.textContent.toLowerCase();
			const parentElement = authour.parentElement;

			authourName.includes(inputValue)
				? (parentElement.style.display = 'block')
				: (parentElement.style.display = 'none');
		});
	});
};

document.addEventListener('DOMContentLoaded', () => searchAuthours());

$('.sliderBlock').slick({
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 1000,
});
