import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Testimony from "../../components/Testimony/Testimony";
import OurServices from "../../components/OurServices/OurServices";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import CountUp from "../../components/CountUp/CountUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./_About.scss";

export default function About() {
  const bg = useSelector((state) => state.bgUrl);
  const bestPrice = useSelector((state) => state.bestPrice);
  const countUpelems = useSelector((state) => state.countUp);
  // console.log(countUpelems);
  const aboutURL = useSelector((state) => state.about);
  console.log(aboutURL);

  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1].url})` }}
        >
          <p className="product-page"> HOME ABOUT US </p>
          <h1 className="product-title">ABOUT US</h1>
        </SwiperSlide>
      </Hero>

      <Grid container className="about-container">
        <Grid item xs={12} md={6} className="about-media">
          {/* <img src={aboutURL.url} alt="about-us" /> */}
          <div
            className="about-img"
            style={{ backgroundImage: `url(${aboutURL.url})` }}
          >
            <div className="play-icon-bg">
              <PlayArrowIcon className="play-icon" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="about-description">
          <h2 className="about-header">
            Welcome to Vegefoods an eCommerce website
          </h2>

          <p className="about-details">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="about-details">
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>

          <Button variant="contained" color="success">
            <Link to="/products/1" className="link">
              Shop Now
            </Link>
          </Button>
        </Grid>
      </Grid>

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
