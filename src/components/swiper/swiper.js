import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import { slider } from "../assets/assets"
import { styles } from "../utils/style";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[90%] md:h-[70%] h-[30%] md:rounded-[25px] rounded-[10px] m-16"
      >
        <SwiperSlide><div className={`${styles.headingText} flex w-full h-full md:pt-48 pt-[30%] bg-gray-500 justify-center text-center`}>Slider - 1</div></SwiperSlide>
        <SwiperSlide><div className={`${styles.headingText} flex w-full h-full md:pt-48 pt-[30%] bg-gray-500 justify-center text-center`}>Slider - 2</div></SwiperSlide>
        <SwiperSlide><div className={`${styles.headingText} flex w-full h-full md:pt-48 pt-[30%] bg-gray-500 justify-center text-center`}>Slider - 3</div></SwiperSlide>
        <SwiperSlide><div className={`${styles.headingText} flex w-full h-full md:pt-48 pt-[30%] bg-gray-500 justify-center text-center`}>Slider - 4</div></SwiperSlide>
        <SwiperSlide><div className={`${styles.headingText} flex w-full h-full md:pt-48 pt-[30%] bg-gray-500 justify-center text-center`}>Slider - 5</div></SwiperSlide>
      </Swiper>
    </>
  );
}
