import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
import { removeFromCart } from "../../Redux/Reducers/cartItems";
import TextField from "@mui/material/TextField";
import ShowAlert from "../../Utils/Alert/Alert";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./_Cart.scss";

export default function Cart() {
  const bg = useSelector((state) => state.bgUrl);

  const dispatch = useDispatch();
  const cartItems =  useSelector((state) => state.cart);

  const deleteFromList = (productID) => {
    dispatch(removeFromCart(productID));
  };

  //cart total price

  const totalPrice = cartItems.length > 0 && cartItems.reduce((total, product) => {
    if (product.discount !== 0) {
      console.log("quantity", console.log(product.quantity));

      return (
        total +
        product.price * ((100 - product.discount) / 100) * product.quantity
      );
    } else {
      console.log("quantity", console.log(product.quantity));
      return total + product.price * product.quantity;
    }
  }, 0);

  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home CART </p>
          <h1 className="product-title">MY CART</h1>
        </SwiperSlide>
      </Hero>
      {cartItems.length > 0 ? (
        <>
          <BasicTable products={cartItems} deleteFromList={deleteFromList} />
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "0 15rem",
              columnGap: "5%",
            }}
          >
            <TextField
              id="outlined-basic"
              label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            />
            <Button
              variant="contained"
              color="success"
              className="lets-pay-btn"
            >
              <Link to="/checkout" className="link">
                continue and pay
              </Link>
            </Button>
          </Grid>
        </>
      ) : (
        <ShowAlert
          variant="filled"
          type="error"
          msg="Cart is Empty!"
          cart={true}
        />
      )}

      <Footer />
    </>
  );
}
