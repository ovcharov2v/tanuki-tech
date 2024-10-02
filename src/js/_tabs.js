import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {
	const tabsList = document.querySelectorAll('.tabs');
	if (tabsList.length) {
		tabsList.forEach((tabs) => {
			const tabsNavs = tabs.querySelectorAll('.tabs__nav-item');
			const tabContents = tabs.querySelectorAll('.tabs__item');

			tabsNavs.forEach(tab => {
				tab.addEventListener('click', () => {
					const tabId = tab.getAttribute('data-tab');

					tabsNavs.forEach(t => t.classList.remove('tabs__nav-item--active'));
					tabContents.forEach(content => content.classList.remove('tabs__item--active'));

					tab.classList.add('tabs__nav-item--active');
					tabs.querySelector(`.tabs__item[data-tab="${tabId}"]`).classList.add('tabs__item--active');
				});
			});
		})
	}

})
