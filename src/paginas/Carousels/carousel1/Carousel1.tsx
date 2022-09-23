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
import "./Carousel1.css";

//imagens
import tutorial1 from "../../../assets/tutorial1.png";
import tutorial2 from "../../../assets/tutorial2.png";
import tutorial3 from "../../../assets/tutorial3.png";

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
        <img src={tutorial1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tutorial2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tutorial3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel1;
