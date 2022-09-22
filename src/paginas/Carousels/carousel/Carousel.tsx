import React, { Component } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";

//imagens
import ruiva from '../../../assets/ruiva.png'
import moca from "../../../assets/moca.jpg";
import caixa from "../../../assets/caixa.png"

function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]}
      slidesPerView={1}
      autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={ruiva} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={moca} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={caixa} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}; 

export default Carousel;