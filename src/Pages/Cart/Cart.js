import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
import {
  fetchCartItems,
  removeFromCart,
  updateTotalPrice,
} from "../../Redux/Reducers/cartItems";
import TextField from "@mui/material/TextField";
import ShowAlert from "../../Utils/Alert/Alert";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./_Cart.scss";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteFromList = (productID) => {
    dispatch(removeFromCart(productID));
  };

  //cart total price
  const totalPrice =
    cartItems.length > 0
      ? cartItems.reduce((total, product) => {
          if (product.discount !== 0) {
            return total + product.price * ((100 - product.discount) / 100);
          } else {
            return total + product.price;
          }
        }, 0)
      : 0;

  // update cart items
  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(updateTotalPrice());
  }, []);

  return (
    <>
      <Header indexPage={false} pageTitle="MY CART" />
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
              label={`$ ${totalPrice.toFixed(2)}`}
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
