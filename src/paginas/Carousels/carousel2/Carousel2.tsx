import React, { Component } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Autoplay,
  Mousewheel,
  Keyboard
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel2.css";

//imagens
import tutorial4 from "../../../assets/tutorial4.png";
import tutorial5 from "../../../assets/tutorial5.png";
import tutorial6 from "../../../assets/tutorial6.png";

function Carousel1() {
  return (
    <Swiper
      // install Swiper modules
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={tutorial4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tutorial5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tutorial6} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel1;
