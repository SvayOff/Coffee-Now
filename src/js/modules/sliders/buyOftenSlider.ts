import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const renderBuyOftenSlider = () => {
	const buyOftenSlider: SwiperOptions = {
		modules: [Navigation, Autoplay],
		spaceBetween: 30,
		slidesPerView: 'auto',
		loop: true,
		autoplay: {
			delay: 5000,
			reverseDirection: true
		},
		navigation: {
			nextEl: '.buy-often__slider-arrow_next',
			prevEl: '.buy-often__slider-arrow_prev'
		}
	};

	new Swiper(".buy-often__slider", buyOftenSlider);
}