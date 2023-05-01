import React, { useState } from "react";

import ProductItem from "../ProductItem/ProductItem";
import { Box, Grid } from "@mui/material";

// import Product1 from "../../assets/images/tomatoe.jpg";
// import Product2 from "../../assets/images/chili.jpg";
// import Product3 from "../../assets/images/garlic.jpg";
// import Product4 from "../../assets/images/onion.jpg";
// import Product5 from "../../assets/images/green-beans.jpg";
// import Product6 from "../../assets/images/fruit-juice.jpg";
// import Product7 from "../../assets/images/carrot.jpg";
// import Product8 from "../../assets/images/bell-peper.jpg";

import "./_Products.scss";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector(state=> state.products.products)
  return (
    <Box>
      <div className="landing-section-title">Featured Products</div>
      <div className="landing-section-subtitle">Our Products</div>
      <div className="landing-section-details">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </div>
      <Grid container className="products-grid-container">
        {products.slice(0,8).map((product, index) => (
          <Grid key={index + 1} item sx={12} sm={6} md={3} p={3}>
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
    </Box>
  );
}
