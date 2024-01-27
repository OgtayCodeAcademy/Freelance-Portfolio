import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay,Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import scss from './index.module.scss';

const HomePage_Section1 = () => {
  return (
    <>
      <Swiper
        effect='fade'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        className={scss.mySwiper}
      >
        <SwiperSlide className={scss.swiperSlide}>
            <img src="foodandmore.jpg" alt="" />
            <div className={scss.content}>
            <div className={scss.numbers}>
                <ul>
                    <li style={{color: "orange"}}>01.</li>
                    <li>02.</li>
                    <li>03.</li>
                </ul>
            </div>
            <div className={scss.sliderDescription}>
                <h1>Food and more<span>.</span></h1>
                <h5>By Chef Francis Smith</h5>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={scss.swiperSlide}>
            <img src="specialdish.jpg" alt="" />
            <div className={scss.content}>
            <div className={scss.numbers}>
                <ul>
                    <li>01.</li>
                    <li style={{color: "orange"}}>02.</li>
                    <li>03.</li>
                </ul>
            </div>
            <div className={scss.sliderDescription}>
                <h1>Special Dish<span>.</span></h1>
                <h5>By Chef Francis Smith</h5>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={scss.swiperSlide}>
            <img src="hygienicfood.jpg" alt="" />
            <div className={scss.content}>
            <div className={scss.numbers}>
                <ul>
                    <li>01.</li>
                    <li>02.</li>
                    <li style={{color: "orange"}}>03.</li>
                </ul>
            </div>
            <div className={scss.sliderDescription}>
                <h1>Hygienic Food<span>.</span></h1>
                <h5>By Chef Francis Smith</h5>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomePage_Section1;
