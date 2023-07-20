import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromList } from "../../Redux/Reducers/Wishlist";
import BasicTable from "../../Utils/Table/Table";
import ShowAlert from "../../Utils/Alert/Alert";
import { cartContext } from "../../Contexts/Contexts";
import { TextField } from "@mui/material";
import { addToCart, getTotals } from "../../Redux/Reducers/Cart";
import { toast } from "react-toastify";

import "./_WishList.scss";

export default function WishList() {
  const bg = useSelector((state) => state.bgUrl);
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.cartTotalAmount);

  //delete
  const deleteFromList = (product) => {
    dispatch(removeFromList(product));
  };

  //add to cart
  const cartItems = useSelector((state) => state.cart.cartItems);

  const addToCartHandler = (mainProduct) => {
    const selectedItem = wishlistItems.find(
      (product) => product.id === mainProduct.id
    );
    if (cartItems.includes(selectedItem)) {
      toast.error("You have added this Item before!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Item has been added to your Cart", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(addToCart(mainProduct));
      dispatch(removeFromList(mainProduct));
    }
  };

  //total price
  useEffect(() => {
    dispatch(getTotals());
  }, [wishlistItems, dispatch]);

  return (
    <>
      <Header />

      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home WISHLIST </p>
          <h1 className="product-title">MY WISHLIST</h1>
        </SwiperSlide>
      </Hero>

      {wishlistItems.length !== 0 ? (
        <>
          <BasicTable
            products={wishlistItems}
            handleRemoveFromCart={deleteFromList}
            wishlist={true}
            addToCartHandler={addToCartHandler}
          ></BasicTable>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "0 15rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            />
          </div>
        </>
      ) : (
        <ShowAlert
          variant="filled"
          type="error"
          msg="You Have not select any product yet!"
          wishlist={true}
        />
      )}

      <Footer />
    </>
  );
}
