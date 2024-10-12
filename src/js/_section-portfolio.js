import Swiper from "swiper";
import {Pagination} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
	new Swiper('.section-portfolio__slider', {
		modules: [Pagination],
		slidesPerView: 1.1,
		spaceBetween: 12,
		slidesPerGroup: 1,
		pagination: {
			el: '.section-portfolio__dots',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 12,
				slidesPerGroup: 2,
			},
			1024: {
				enabled: false,
			},
		},
	});
})
