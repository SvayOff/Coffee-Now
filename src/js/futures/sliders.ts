import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css/bundle';

export const showSliders = () => {
	const noveltySlider = new Swiper(".novelty__slider", {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.novelty__slider-arrow_next',
			prevEl: '.novelty__slider-arrow_prev',
		},
	});

	const buyOftenSlider = new Swiper(".buy-often__slider", {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.buy-often__slider-arrow_next',
			prevEl: '.buy-often__slider-arrow_prev'
		}
	});

	const reviewsSlider = new Swiper('.reviews__slider', {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.reviews__slider-arrow_next',
			prevEl: '.reviews__slider-arrow_prev'
		}
	});
};



