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
import slice, { selectCategory } from "../../Redux/Reducers/products";

export default function Products() {
  const dispatch = useDispatch();
  const bg = useSelector((state) => state.bgUrl);
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  const filterProductsHandel = (category) => {
    dispatch(selectCategory(category));
  };

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

      //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsCountPerPage = 4;
  const indexOfLastItem = currentPage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const shownItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
          <h1 className="product-title">Products</h1>
        </SwiperSlide>
      </Hero>

      <ul className="filter">
        {categories.map((category) => (
          <li
            className="filter-item"
            onClick={() => filterProductsHandel(category.title)}
            key={category.id}
          >
            {category.title}
          </li>
        ))}
      </ul>

      <Grid container className="products-wrapper">
        {shownItems.map((product) => (
          <Grid key={product.id} item sx={12} sm={6} md={3} p={3}>
            <ProductItem
              name={product.title}
              img={product.cover}
              price={product.price}
              discount={product.discount}
              path={`Product-info/${product.id}`}
            />
          </Grid>
        ))}
      </Grid>
      <CustomPagination
      items={filteredProducts}
      itemsCount={itemsCountPerPage}
     onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
}
