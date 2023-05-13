import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

export default function Checkout() {
  const bg = useSelector((state) => state.bgUrl);
  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[0]})` }}
        >
          <p className="product-page"> Home Products </p>
          <h1 className="product-title">Product info</h1>
        </SwiperSlide>
      </Hero>

      <h2 className="billing-detail-header">Billing Details</h2>
      <form action="">
        <Grid container>
          <Grid className="customer-form" item lg={6} xs={12}>
            <Grid className="name" item xs={12} md={6}>
              <Grid className="first-name" >
                <label htmlFor=""> First name </label>
                <input type="text" />
              </Grid>
              <Grid className="last-name">
                <label htmlFor=""> last name </label>
                <input type="text" />
              </Grid>
            </Grid>
            <Grid className="state">
              <label htmlFor=""> State/Country </label>
              <input type="text" placeholder="Germany" />
            </Grid>
            <Grid className="address" item xs={12} md={6}>
              <Grid className="street" >
                <label htmlFor=""> Street Address </label>
                <input
                  type="text"
                  placeholder="House number and street name "
                />
              </Grid>
              <Grid className="apartment">
                {/* <label htmlFor=""> Street Address </label> */}
                <input
                  type="text"
                  placeholder="apartment/suit/unit *optional "
                />
              </Grid>
            </Grid>
            <Grid className="sub-address" xs={12} md={6}>
              <Grid className="city" item >
                <label htmlFor=""> Town/City </label>
                <input type="text" />
              </Grid>
              <Grid className="ZIP" item >
                <label htmlFor=""> Postcode / ZIP* </label>
                <input type="text" />
              </Grid>
            </Grid>
            <Grid className="contact-info" item xs={12} md={6}>
              <Grid className="phone">
                <label htmlFor=""> Phone</label>
                <input type="text" />
              </Grid>
              <Grid className="email">
                <label htmlFor=""> Email address </label>
                <input type="text" />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="payment" item lg={6} xs={12}>
            <div className="cart-total">
              <div className="head">Cart total</div>
              <div className="sub-total">
                <span>Subtotal</span>
                <span> $ 67</span>
              </div>
              <div className="delivery">
                <span>Delivery</span>
                <span>$ 00.0</span>
              </div>
              <div className="discount">
                <span>Discount</span>
                <span>$ 30</span>
              </div>
              <hr />
              <div className="total">
                <span>TOTAL</span>
                <span>$ 50</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </form>

      <Footer />
    </>
  );
}
