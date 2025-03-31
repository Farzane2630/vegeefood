import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";

import "./_Hero.scss";

export default function Hero({indexPage, children }) {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper slide-container ${!indexPage ? "not-index" : ""}`}
    >
      {/* {indexPage && (
        <>
         <SwiperSlide className="slide-1" style={{backgroundImage: `url(${bgUrls[0].url})`}}>
                  <h1 className="mb-2 index-title"> 100% Fresh & Organic Fruits</h1>
                  <h2 className="index-sub-title"> We Deliver Organic Vegetables & Fruits </h2>
                  <Button variant="contained" color="success" style={{marginBottom: "10rem"}}>
                    <Link className="link" to="about">
                      View Details
                    </Link>
                  </Button>
                </SwiperSlide>
        
                <SwiperSlide className="slide-2" style={{backgroundImage: `url(${bgUrls[2].url})`}}>
                  <h1 className="mb-2 index-title"> 100% Fresh & Organic Fruits</h1>
                  <h2 className="index-sub-title"> We Serve Fresh Vegetables & Fruits </h2>
                  <Button variant="contained" color="success">
                    <Link className="link" to="about">
                      View Details
                    </Link>
                  </Button>
                </SwiperSlide>
        </>
      )} */}
      {children}
    </Swiper>
  );
}
