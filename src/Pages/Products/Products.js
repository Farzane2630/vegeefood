import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "./_Products.scss";
import { Grid } from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem";
import CustomPagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsAction } from "../../Redux/Reducers/products";

export default function Products() {
  const [isFiltered, setIsFiltered] = useState(false);

  const allProducts = useSelector((state) => state.products.products);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  console.log("fil products", filteredProducts);
  console.log("all products", allProducts);
  const dispatch = useDispatch();

  const filterProducts = (e) => {
    if (e.target.innerHTML !== "All") {
      setIsFiltered(true);
      dispatch(filterProductsAction(allProducts, e.target.innerHTML));
    } else {
      setIsFiltered(false);
    }
  };

  return (
    <>
      <Header />
      <Hero>
        <SwiperSlide className="slide-1">
          <p className="product-page"> Home Products </p>
          <h1 className="product-title">Products</h1>
        </SwiperSlide>
      </Hero>

      <ul className="filter">
        <li className="filter-item" onClick={filterProducts}>
          All
        </li>
        <li className="filter-item" onClick={filterProducts}>
          Vegetables
        </li>
        <li className="filter-item" onClick={filterProducts}>
          Fruits
        </li>
        <li className="filter-item" onClick={filterProducts}>
          Juice
        </li>
        <li className="filter-item" onClick={filterProducts}>
          Dried
        </li>
      </ul>

      <Grid container className="products-wrapper">
        {!isFiltered
          ? allProducts.map((product) => (
              <Grid key={product.id} item sx={12} sm={6} md={3} p={3}>
                <ProductItem
                  name={product.title}
                  img={product.cover}
                  price={product.price}
                  discount={product.discount}
                  path={`Product-info/${product.title}`}
                />
              </Grid>
            ))
          : filteredProducts.map((product) => (
              <Grid key={product.id} item sx={12} sm={6} md={3} p={3}>
                <ProductItem
                  name={product.title}
                  img={product.cover}
                  price={product.price}
                  discount={product.discount}
                  path={`Product-info/${product.title}`}
                />
              </Grid>
            ))}
      </Grid>

      <CustomPagination />

      <Footer />
    </>
  );
}
