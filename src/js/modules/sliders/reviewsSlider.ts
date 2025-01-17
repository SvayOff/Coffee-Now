import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const renderReviewsSlider = () => {
	const reviewsSlider: SwiperOptions = {
		modules: [Navigation, Autoplay],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.reviews__slider-arrow_next',
			prevEl: '.reviews__slider-arrow_prev'
		}
	};

	new Swiper('.reviews__slider', reviewsSlider);
} 