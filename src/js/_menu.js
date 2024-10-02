document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('.header__nav-link')
	if(links.length) {
		links.forEach(function (a) {
			a.addEventListener('click', function (event) {
				event.preventDefault()
				const hash = event.target.getAttribute('href')
				const scrollTarget = document.querySelector(hash)
				const headerHeight = document.querySelector('.header').scrollHeight
				window.scrollTo({
					top: scrollTarget.offsetTop - headerHeight,
					left: 0,
					behavior: "smooth"
				})
			});
		});
	}
})
