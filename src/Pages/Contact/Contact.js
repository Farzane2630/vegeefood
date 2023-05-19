import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

import "./_Contact.scss";

export default function Contact() {
  const bg = useSelector((state) => state.bgUrl);
  const contactInfo = useSelector((state) => state.contact);
  // const dispatch = useDispatch()
  return (
    <div style={{ backgroundColor: "#f7f6f2" }}>
      <Header />

      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home CONTACT US </p>
          <h1 className="product-title">MY CONTACT US</h1>
        </SwiperSlide>
      </Hero>
      <Grid container className="contact-info-container">
        <div className="contact-info">
          <Grid className="contact" item sx={12} md={6} lg={3}>
            <span>Address:</span>
            {contactInfo.address}
          </Grid>
        </div>
        <div className="contact-info">
          <Grid className="contact-info" item sx={12} md={6} lg={3}>
            <span> Phone: </span>
            {contactInfo.phone}
          </Grid>
        </div>
        <div className="contact-info">
          <Grid className="contact-info" item sx={12} md={6} lg={3}>
            <span>Email: </span>
            {contactInfo.email}
          </Grid>
        </div>
        <div className="contact-info">
          <Grid className="contact-info" item sx={12} md={6} lg={3}>
            <span>Website: </span>
            {contactInfo.website}
          </Grid>
        </div>
      </Grid>
      <Footer />
    </div>
  );
}
