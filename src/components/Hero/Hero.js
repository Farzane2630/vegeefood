import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

import "./_Hero.scss";

export default function Hero({notIndex, children }) {
  // const notIndex = notIndex
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper slide-container ${notIndex ? "not-index" : ""}`}
    >
        {children}
    </Swiper>
  );
}
