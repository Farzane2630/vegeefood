import React, { useContext } from "react";
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

import "./_WishList.scss";

export default function WishList() {
  const bg = useSelector((state) => state.bgUrl);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const deleteFromList = (productID) => {
    const remainsProducts = wishlist.filter(
      (product) => product.id !== productID
    );

    dispatch(removeFromList(remainsProducts));
  };

  //total price
  const context = useContext(cartContext);

  const totalPrice = wishlist.reduce((total, product) => {
    return total + product.price * context.productQuantity;
  }, 0);

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

      {wishlist.length !== 0 ? (
        <>
          <BasicTable
            products={wishlist}
            deleteFromList={deleteFromList}
          ></BasicTable>
          <TextField
            id="outlined-basic"
            label={`$${totalPrice}`}
            variant="outlined"
            disabled={true}
          />
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
