import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "swiper/css";
import "./_Products.scss";
import { Grid } from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem";
import CustomPagination from "../../Utils/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../Redux/Reducers/products";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { addTolist } from "../../Redux/Reducers/Wishlist";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export default function Products() {
  const dispatch = useDispatch();
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
  const itemsCountPerPage = 8;
  const indexOfLastItem = currentPage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const shownItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  //cartItems
  const cartItems = useSelector((state) => state.cart);

  const addToCartHandler = (product) => {
    if (cartItems.length > 1 && cartItems.includes(product)) {
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
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      const updatedProductObject = {
        id: uuidv4(),
        title: product.title,
        price: product.price,
        quantity: 1,
        rate: product.rate,
        sold: product.sold,
        cover: product.cover,
        inStock: product.inStock,
        category: product.category,
        discount: product.discount,
      };

      dispatch(addToCart(updatedProductObject));
    }
  };
  

  //wishlist
  const wishlist = useSelector((state) => state.wishlist);

  const wishlistHandler = (productID) => {
    const favoriteItem = products.find((product) => product.id === productID);
    if (wishlist.includes(favoriteItem)) {
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
      toast.success("Item has been added to your wishlist", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    dispatch(addTolist(favoriteItem));
  };

  return (
    <>
      <Header indexPage={false} pageTitle="PRODUCTS" />

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
              addToWishlist={() => wishlistHandler(product.id)}
              addToCart={() => addToCartHandler(product)}
              name={product.title}
              img={product.cover}
              price={product.price}
              discount={product.discount}
              path={`/product-info/${product.id}`}
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
