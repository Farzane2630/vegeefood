import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
// import AHero from "../../assets/images/bg_1.jpg";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "./_ProductInfo.scss";
import Footer from "../../components/Footer/Footer";

// import apple from "../../assets/images/apple.jpg";
import { Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ProductInfo() {
  return (
    <>
      <Header />
      <Hero>
        <SwiperSlide
          className="slide-1"
          // style={{ backgroundImage: `url(${AHero})` }}
        >
          <p className="product-page"> Home Products </p>
          <h1 className="product-title">Product info</h1>
        </SwiperSlide>
      </Hero>

      <Grid container>
        <Grid className="img-section" item xs={12} lg={6}>
          <div className="product-img-container">
            {/* <img src={apple} alt="apple" className="product-img" /> */}
          </div>
        </Grid>
        <Grid className="txt-section" item xs={12} lg={6}>
          <h2 className="product-title">APPLE</h2>
          <div className="statistical-info">
            <div className="rating">
              5.0
              <div className="stars">
                <StarIcon className="star-filled" />
                <StarBorderIcon className="star-outlined" />
              </div>
            </div>
            <div className="sold-count">
              500 <span className="sold">Sold</span>{" "}
            </div>
          </div>
          <div className="price">$ 120.00</div>
          <p className="more-info">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Text should turn
            around and return to its own, safe country. But nothing the copy
            said could convince her and so it didn’t take long until.
          </p>
          <div className="add-to-cart-section">
            <div className="minus">-</div>
            <input type="text" className="product-count" />
            <div className="minus">+</div>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
