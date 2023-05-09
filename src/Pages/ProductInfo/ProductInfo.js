import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "./_ProductInfo.scss";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BasicRating from "../../Components/Rating/Rating";
import { cartContext } from "../../Contexts/Contexts";

export default function ProductInfo() {
  const context = useContext(cartContext);
  const [isSelected, setIsSelected] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const bg = useSelector((state) => state.bgUrl);

  const products = useSelector((state) => state.products.products);
  const { productID } = useParams();
  const mainProductInfo = products.find((product) => product.id == productID);

  const addToCartHandler = () => {
    if (!isSelected) {
      context.setValue((prev) => prev + 1);
      setIsSelected(true);
    }
  };
  return (
    <>
      <Header />
      <Hero>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[0]})` }}
        >
          <p className="product-page"> Home Products </p>
          <h1 className="product-title">Product info</h1>
        </SwiperSlide>
      </Hero>

      <Grid container className="product-info-container">
        <Grid className="img-section" item xs={12} lg={6}>
          <img
            src={mainProductInfo.cover}
            alt={mainProductInfo.title}
            className="product-img"
          />
        </Grid>
        <Grid className="txt-section" item xs={12} lg={6}>
          <h2 className="product-title">{mainProductInfo.title}</h2>
          <div className="statistical-info">
            <div className="rating">
              <BasicRating
                type="read-only"
                rate={Math.round(mainProductInfo.rate)}
              />
            </div>
            <div className="sold-count">
              {mainProductInfo.sold} <span className="sold">Sold</span>{" "}
            </div>
          </div>
          <h3 className="price">$ {mainProductInfo.price}</h3>
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
