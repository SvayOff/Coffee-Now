import 'swiper/css/bundle';
import { renderNoveltySlider } from "./noveltySlider";
import { renderBuyOftenSlider } from "./buyOftenSlider";
import { renderReviewsSlider } from "./reviewsSlider";

const showSliders = () => {
	renderNoveltySlider();
	renderBuyOftenSlider();
	renderReviewsSlider();
};

export default showSliders;


