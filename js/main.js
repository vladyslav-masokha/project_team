const positionNav = () => {
	const headerEl = document.querySelector('.header');
	const navEl = document.querySelector('.nav');
	const headerHeight = headerEl.offsetHeight;

	navEl.style.top = headerHeight - 1 + 'px';
};

const openNavigation = () => {
	const burgerNavEl = document.querySelector('.burgerNav');

	burgerNavEl.addEventListener('click', () => {
		document.querySelector('.nav').classList.toggle('visible');
		burgerNavEl.classList.toggle('open');
	});
};

const searchBooksInHeader = () => {
	const fieldSearch = document.querySelector('.headerBody .fieldSearchBook');
	const searchOptions = document.querySelector(
		'.headerBody .searchBlockOptions'
	);
	const searchElements = document.querySelectorAll(
		'.headerBody .searchBlockOption'
	);

	fieldSearch.addEventListener(
		'click',
		() => (searchOptions.style.display = 'flex')
	);

	searchElements.forEach(book => {
		book.addEventListener('click', () => {
			fieldSearch.value = book.textContent.trim();
			searchOptions.style.display = 'none';
		});
	});

	fieldSearch.addEventListener('input', () => {
		const inputValue = fieldSearch.value.toLowerCase();

		searchElements.forEach(book => {
			const bookName = book.textContent.toLowerCase();

			bookName.includes(inputValue)
				? (book.style.display = 'flex')
				: (book.style.display = 'none');
		});
	});

	document.addEventListener('click', event => {
		!fieldSearch.contains(event.target) && !searchOptions.contains(event.target)
			? (searchOptions.style.display = 'none')
			: null;
	});
};

const searchBooksOutHeader = () => {
	const fieldSearch = document.querySelector('.fieldSearchBookOut');
	const searchOptions = document.querySelector('.searchBlockOutOptions');
	const searchElements = document.querySelectorAll('.searchBlockOutOption');

	fieldSearch.addEventListener(
		'click',
		() => (searchOptions.style.display = 'flex')
	);

	searchElements.forEach(book => {
		book.addEventListener('click', () => {
			fieldSearch.value = book.textContent.trim();
			searchOptions.style.display = 'none';
		});
	});

	fieldSearch.addEventListener('input', () => {
		const inputValue = fieldSearch.value.toLowerCase();

		searchElements.forEach(book => {
			const bookName = book.textContent.toLowerCase();

			bookName.includes(inputValue)
				? (book.style.display = 'flex')
				: (book.style.display = 'none');
		});
	});

	document.addEventListener('click', event => {
		!fieldSearch.contains(event.target) && !searchOptions.contains(event.target)
			? (searchOptions.style.display = 'none')
			: null;
	});
};

document.addEventListener('DOMContentLoaded', () => {
	openNavigation();
	searchBooksInHeader();
	searchBooksOutHeader();
	positionNav();
});

window.addEventListener('resize', positionNav);

$('.sliderBlock').slick({
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 1000,
});