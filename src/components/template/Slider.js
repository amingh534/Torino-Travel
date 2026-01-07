"use client";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.title}>
          <span>؟</span>
          <h2>
            چرا <i></i>
          </h2>
        </div>

        <h3>تور طبیعت‌گردی و تاریخی</h3>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم‌گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید...
        </p>
      </div>

      <div className={styles.left}>
        <div className={styles.imgcontainer}>
          <Swiper
            pagination={{ type: "fraction" }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
          >
            
            <SwiperSlide className={styles.swiperSlide}>
              <img className={styles.slide1} src="images/slide1.webp" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img className={styles.slide2} src="images/slide2.webp" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img className={styles.slide3} src="images/slide3.webp" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img className={styles.slide4} src="images/slide4.webp" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
