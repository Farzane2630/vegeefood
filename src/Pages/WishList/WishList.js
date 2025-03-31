import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromList } from "../../Redux/Reducers/Wishlist";
import BasicTable from "../../Utils/Table/Table";
import ShowAlert from "../../Utils/Alert/Alert";
import { cartContext } from "../../Contexts/Contexts";
import { TextField } from "@mui/material";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { toast } from "react-toastify";
import "./_WishList.scss";

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  //delete
  const deleteFromList = (productID) => {
    const remainsProducts = wishlist.filter(
      (product) => product.id !== productID
    );

    dispatch(removeFromList(remainsProducts));
  };

  //add to cart
  const cartItems = useSelector((state) => state.cart);

  const addToCartHandler = (productID) => {
    const selectedItem = wishlist.find((product) => product.id === productID);
    if (cartItems.includes(selectedItem)) {
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
      dispatch(addToCart(selectedItem));
    }
  };

  //total price
  const context = useContext(cartContext);

  const totalPrice = wishlist.reduce((total, product) => {
    return total + product.price * context.productQuantity;
  }, 0);

  return (
    <>
      <Header indexPage={false} pageTitle="WISHLIST" />

      {wishlist.length !== 0 ? (
        <>
          <BasicTable
            products={wishlist}
            deleteFromList={deleteFromList}
            wishlist={true}
            addToCartHandler={addToCartHandler}
          ></BasicTable>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "0 15rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            />
          </div>
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
