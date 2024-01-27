import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import scss from './index.module.scss';

const HomePage_Section3 = () => {
  return (
    <>
      <section className={scss.testimonials}>
        <img className={scss.testimonialsBackground} src="testimonials.jpg" alt="" />
        <div className={scss.content}>
            <div className={scss.sectionTittle}>
                <img src="icecreamicon.png" alt="" />
                <h1>Testimonials</h1>
            </div>
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
            modules={[Autoplay, Pagination, Navigation]}
            className={scss.mySwiper}
            >
                <SwiperSlide className={scss.swiperSlide}>
                    <p>“</p>
                    <h3>"Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. "</h3>
                    <h4><span>Ted Chapman</span>, Client</h4>
                </SwiperSlide>
                <SwiperSlide className={scss.swiperSlide}>
                    <p>“</p>
                    <h3>"Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. "</h3>
                    <h4><span>Ted Chapman</span>, Client</h4>
                </SwiperSlide>
                <SwiperSlide className={scss.swiperSlide}>
                    <p>“</p>
                    <h3>"Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. "</h3>
                    <h4><span>Ted Chapman</span>, Client</h4>
                </SwiperSlide>
            </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomePage_Section3;
