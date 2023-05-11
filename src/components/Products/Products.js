import React, { useEffect, useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { Box, Grid } from "@mui/material";
import "./_Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Reducers/products";
import { cartContext } from "../../Contexts/Contexts";

export default function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state=> state.products.products)
  console.log("all Products",products);

  
  const context = useContext(cartContext)

  const wishlistHandler = (productID) => {
    context.addToFavorit(productID, products)
    console.log(context.wishlist);
  }

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
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
            addToWishlist={()=>wishlistHandler(product.id)}
              name={product.title}
              img={product.cover}
              price={product.price}
              discount={product.discount}
              path={`Product-info/${product.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
