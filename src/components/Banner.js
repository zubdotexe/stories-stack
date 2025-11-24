"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default () => {
    return (
        <div className="mt-10 mx-2 rounded-md overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="/images/banner1.png" alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banner2.png" alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banner3.jpg" alt=""></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
