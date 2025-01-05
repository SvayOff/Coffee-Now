import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const renderBuyOftenSlider = () => {
	const buyOftenSlider: SwiperOptions = {
		modules: [Navigation],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.buy-often__slider-arrow_next',
			prevEl: '.buy-often__slider-arrow_prev'
		}
	};

	new Swiper(".buy-often__slider", buyOftenSlider);
}