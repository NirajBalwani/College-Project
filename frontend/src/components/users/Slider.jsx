import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = () => {

    const sliderSettings = {
        440: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 1,
            spaceBetween: 30,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroupSkip: 2,
            slidesPerGroup: 2
        },
        1024: {
            // slidesPerView: 3,
            // spaceBetween: 30,
        },
    };
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slideNextClass=".arrow-right"
            slidePrevClass=".arrow-left"
            slidesPerGroup={1}
            breakpoints={sliderSettings}
            loop={true}
            data-swiper-autoplay="2000"
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
}

export default Slider;
