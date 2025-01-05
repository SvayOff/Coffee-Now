import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const renderReviewsSlider = () => {
	const reviewsSlider: SwiperOptions = {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.reviews__slider-arrow_next',
			prevEl: '.reviews__slider-arrow_prev'
		}
	};

	new Swiper('.reviews__slider', reviewsSlider);
} 