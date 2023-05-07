import React from "react";
import { Route, Routes } from "react-router";
import Index from "./Pages/Index/Index";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import WishList from "./Pages/WishList/WishList";

export default function AllRoutes() {
  return (
    <Routes>
      <Route exact path="/" Component={Index} />
      <Route path="products/:currentPageCount" Component={Products} />
      <Route path="about" Component={About} />
      <Route path="blog" Component={Blog} />
      <Route path="cart" Component={Cart} />
      <Route path="checkout" Component={Checkout} />
      <Route path="contact" Component={Contact} />
      <Route path="product-info/:productName" Component={ProductInfo} />
      <Route path="products/:page/Product-info/:productName" Component={ProductInfo} />
      <Route path="wishlist" Component={WishList} />
    </Routes>
  );
}
