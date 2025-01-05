import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const renderNoveltySlider = () => {
	const noveltySlider: SwiperOptions = {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.novelty__slider-arrow_next',
			prevEl: '.novelty__slider-arrow_prev',
		},
	};

	new Swiper(".novelty__slider", noveltySlider);
}