import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import InputAdornments from "../../components/InfoTable/InfoTable";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

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

      <Grid container>
        <Grid item xs={12} lg={6}>
          <InputAdornments />
          <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="new Account"
                  control={<Radio />}
                  label="Create an Account?"
                />
                <FormControlLabel
                  value="different Address"
                  control={<Radio />}
                  label="Ship to different address"
                />
              </RadioGroup>
            </FormControl>
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
          <div className="payment-method">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" style={{color:"black"}}>
                Payment Method
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Direct Bank Tranfer"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Check Payment"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Paypal"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              value="end"
              required
              control={<Checkbox />}
              label="I have read and accept the terms and conditions.*"
            />
          </div>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
