import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Testimony from "../../components/Testimony/Testimony";
import OurServices from "../../components/OurServices/OurServices";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import CountUp from "../../components/CountUp/CountUp";

import "./_About.scss";

export default function About() {
  const bg = useSelector((state) => state.bgUrl);
  const bestPrice = useSelector((state) => state.bestPrice);
  const countUpelems = useSelector((state) => state.countUp);
  console.log(countUpelems);

  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> HOME ABOUT US </p>
          <h1 className="product-title">ABOUT US</h1>
        </SwiperSlide>
      </Hero>

      <div
        className="container-fluid best-price-container"
        style={{ backgroundImage: `url(${bestPrice.bgUrl})` }}
      >
        {countUpelems.map((elem) => (
          <CountUp end={elem.end} desc={elem.desc} duration={3} />
        ))}
      </div>
      <Testimony />
      <OurServices about={true} />
      <Footer about={true} />
    </>
  );
}
