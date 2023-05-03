import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TestimonyItem from "../TestimonyItem/TestimonyItem";

import "./_Testimony.scss";
import { useSelector } from "react-redux";

export default function Testimony() {
  const usersInfo = useSelector((state) => state.usersInfo);
  console.log("userinfo => ", usersInfo);
  return (
    <>
      <div className="landing-section-title">Testimony</div>
      <div className="landing-section-subtitle">Our satisfied customer</div>
      <div className="landing-section-details">
        says Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts. Separated they live
        in
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper testimony-slide"
      >
        {usersInfo.map((user) => (
          <SwiperSlide key={user.userID}>
            <TestimonyItem
              src={`${user.userImgUrl}`}
              name={user.userName}
              msg={user.userCommentText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
