import React, { useState } from "react";
import Header from "../../components/Header/Header";

import "swiper/css";
import "./_ProductInfo.scss";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BasicRating from "../../Utils/Rating/Rating";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { toast } from "react-toastify";

export default function ProductInfo() {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const products = useSelector((state) => state.products.products);
  const { productID } = useParams();
  const mainProduct = products.find((product) => product.id == productID);
  const cartItems = useSelector((state) => state.cart);

  // adto cart
  const addToCartHandler = (id) => {
    if (!isSelected && inputValue > 0) {
      if (cartItems.includes(mainProduct)) {
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
        setIsSelected(true);
      }
    }
  };
  
  return (
    <>
      <Header indexPage={false} pageTitle="PRODUCT INFO" />

      <Grid container className="product-info-container">
        <Grid className="img-section" item xs={12} lg={6}>
          <img
            src={mainProduct.cover}
            alt={mainProduct.title}
            className="product-img"
          />
        </Grid>
        <Grid className="txt-section" item xs={12} lg={6}>
          <h2 className="product-title">{mainProduct.title}</h2>
          <div className="statistical-info">
            <div className="rating">
              <BasicRating
                type="read-only"
                rate={Math.round(mainProduct.rate)}
              />
            </div>
            <div className="sold-count">
              {mainProduct.sold} <span className="sold">Sold</span>{" "}
            </div>
          </div>
          <h3 className="price">$ {mainProduct.price}</h3>
          <p className="more-info">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Text should turn
            around and return to its own, safe country. But nothing the copy
            said could convince her and so it didn’t take long until.
          </p>
          <div>
            <button
              className="minus"
              onClick={(e) =>
                setInputValue((prev) => {
                  if (e.target.value == 0) {
                    return 0;
                  } else {
                    return prev - 1;
                  }
                })
              }
            >
              -
            </button>
            <input
              type="text"
              className="product-count"
              value={Number(inputValue)}
            />
            <button
              className="plus"
              onClick={() => setInputValue((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="add-to-cart" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
