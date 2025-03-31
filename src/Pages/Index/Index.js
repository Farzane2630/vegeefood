import React from "react";
import Header from "../../components/Header/Header";
import OurServices from "../../components/OurServices/OurServices";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";
import BestPrice from "../../components/BestPrice/BestPrice";
import Testimony from "../../components/Testimony/Testimony";
import Footer from "../../components/Footer/Footer";

import "swiper/css";

import "./_Index.scss";


export default function Index() {

  return (
    <>
      <Header indexPage={true} pageTitle="" />
      <OurServices />
      <Category />
      <Products />
      <BestPrice />
      <Testimony />
      <Footer />
    </>
  );
}
