import React from "react";
import scss from './index.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const HomePage_Section_1 = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className={scss.mySwiper}>
        <SwiperSlide className={scss.slider}>
            <img src="https://preview.colorlib.com/theme/foundation/images/hero_1.jpg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className={scss.slider}>
            <img src="https://preview.colorlib.com/theme/foundation/images/hero_1.jpg.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomePage_Section_1;
