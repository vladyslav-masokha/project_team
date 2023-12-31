// loader on laod page
window.addEventListener('load', () => {
	document.querySelector('#loader').style.display = 'none';
	document.querySelector('#root').style.display = 'flex';

	positionNav();
});

// position navigation
const positionNav = () => {
	const headerEl = document.querySelector('.header');
	const navEl = document.querySelector('.nav');
	const headerHeight = headerEl.offsetHeight;

	navEl.style.top = headerHeight - 1 + 'px';
};

// open navigation
const openNavigation = () => {
	const burgerNavEl = document.querySelector('.burgerNav');

	burgerNavEl.addEventListener('click', () => {
		document.querySelector('.nav').classList.toggle('visible');
		burgerNavEl.classList.toggle('open');
	});
};

// search books in header
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

// search books out header
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

// search authours
const searchAuthours = () => {
	const fieldSearch = document.querySelector('.fieldSearchAuthours');
	const searchElements = document.querySelectorAll('.searchAuthoursOption');

	fieldSearch.addEventListener('input', () => {
		const inputValue = fieldSearch.value.toLowerCase();

		searchElements.forEach(authour => {
			const authourName = authour.textContent.toLowerCase();

			authourName.includes(inputValue)
				? (authour.style.display = 'block')
				: (authour.style.display = 'none');
		});
	});
};

document.addEventListener('DOMContentLoaded', () => {
	openNavigation();
	searchBooksInHeader();
	searchBooksOutHeader();
	searchAuthours();
});

window.addEventListener('resize', positionNav);

// slider
$('.sliderBlock').slick({
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 1000,
});
