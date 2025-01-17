import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const renderNoveltySlider = () => {
	const noveltySlider: SwiperOptions = {
		modules: [Navigation, Autoplay],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.novelty__slider-arrow_next',
			prevEl: '.novelty__slider-arrow_prev',
		},
	};

	new Swiper(".novelty__slider", noveltySlider);
}