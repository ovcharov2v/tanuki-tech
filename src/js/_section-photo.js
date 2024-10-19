import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {
	const mainSwipers = document.querySelectorAll('.slider__main');
	const thumbsSwipers = document.querySelectorAll('.slider__thumbs');

	mainSwipers.forEach((mainSwiper, index) => {
		const thumbsSwiper = thumbsSwipers[index];

		const mainSwiperInstance = new Swiper(mainSwiper, {
			spaceBetween: 10,
			thumbs: {
				swiper: new Swiper(thumbsSwiper, {
					spaceBetween: 0,
					slidesPerView: 3.5,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					slideActiveClass: 'section-photo__thumb-slide--active',
					slideToClickedSlide: true,
					breakpoints: {
						768: {
							spaceBetween: 4,
							slidesPerView: 5.8,
						},
						1024: {
							spaceBetween: 8,
							slidesPerView: 8.1,
						},
					}
				}),
			},
		});

		const thumbsSlides = thumbsSwiper.querySelectorAll('.swiper-slide')

		thumbsSlides.forEach((slide, slideIndex) => {
			slide.addEventListener('click', () => {
				mainSwiperInstance.slideTo(slideIndex);
				thumbsSlides.forEach((slide, slideIndex) => {
					slide.classList.remove('section-photo__thumb-slide--active')
				})
				slide.classList.add('section-photo__thumb-slide--active')
			});
		});
	});
})
