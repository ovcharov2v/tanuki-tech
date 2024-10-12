import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {
	const tabsList = document.querySelectorAll('.tabs');
	if (tabsList.length) {
		tabsList.forEach((tabs) => {
			const tabsNavs = tabs.querySelectorAll('.tabs__nav-item');
			const tabContents = tabs.querySelectorAll('.tabs__item');

			tabsNavs.forEach((tab, index) => {
				let activeIndex = 0;
				if(tabs.classList.contains('tabs--with-hidden-mobile-content')) {
					activeIndex = window.innerWidth >= 1024 ? 0 : 1;
				}
				if (index === activeIndex) {
					tab.classList.add('tabs__nav-item--active')
				}
				tabContents.forEach((content, index) => {
					if (index === activeIndex) content.classList.add('tabs__item--active')
				})

				tab.addEventListener('click', () => {
					const tabId = tab.getAttribute('data-tab');

					tabsNavs.forEach(t => t.classList.remove('tabs__nav-item--active'));
					tabContents.forEach(content => content.classList.remove('tabs__item--active'));

					tab.classList.add('tabs__nav-item--active');
					tabs.querySelector(`.tabs__item[data-tab="${tabId}"]`).classList.add('tabs__item--active');
				});
			});
		})// Скролл вкладок
		const containerList = document.querySelectorAll('.tabs__nav');
		containerList.forEach(container => {
			const buttons = container.querySelectorAll('.tabs__nav-item');

			buttons.forEach(button => {
				button.addEventListener('click', function () {
					const buttonPosition = button.getBoundingClientRect().left + container.scrollLeft;
					const buttonWidth = button.offsetWidth;
					const containerCenter = container.clientWidth / 2;
					const scrollPosition = buttonPosition - containerCenter + buttonWidth / 2;
					container.scrollTo({
						left: scrollPosition,
						behavior: 'smooth'
					});
				});
			});
		})
	}


})
