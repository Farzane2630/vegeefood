import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
import { removeFromCart } from "../../Redux/Reducers/Cart";
import TextField from "@mui/material/TextField";
import ShowAlert from "../../Utils/Alert/Alert";
import { Button, Grid } from "@mui/material";
import { cartContext } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";

import "./_Cart.scss";

export default function Cart() {
  const bg = useSelector((state) => state.bgUrl);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteFromList = (productID) => {
    const remainsItems = cartItems.filter(
      (product) => product.id !== productID
    );

    dispatch(removeFromCart(remainsItems));
  };

  //cart total price

  const context = useContext(cartContext);

  const totalPrice = cartItems.reduce((total, product) => {
    return total + (product.price * context.productQuantity);
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
      {cartItems.length !== 0 ? (
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
