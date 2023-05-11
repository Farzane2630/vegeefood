import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {removeFromList} from "../../Redux/Reducers/Wishlist"

import "./_WishList.scss"


function QuantityInput({ quantity, setQuantity }) {
  return (
    <input
      value={quantity}
      type="text"
      onChange={(e) => setQuantity(e.target.value)}
    />
  );
}

function ProductRow({ product, deleteFromList }) {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <TableRow
    key={product.name}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell className="table-body-cell" component="th" scope="row">
        <IconButton
        onClick={deleteFromList}
          aria-label="delete"
          size="large"
          color="black"
          className="delete-btn"
          >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <img src={product.cover} className="whishItem-img" />
        {product.title}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        $ {product.price}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        <QuantityInput className="count-input" quantity={quantity} setQuantity={setQuantity} />
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        $ {product.price * quantity}
      </TableCell>
    </TableRow>
  );
}

export default function WishList() {
  const bg = useSelector((state) => state.bgUrl);
  const wishlist = useSelector(state=> state.wishlist)
const dispatch = useDispatch()

  const deleteFromList = productID =>{
    const remainsProducts = wishlist.filter(product=> product.id !== productID)

    dispatch(removeFromList(remainsProducts))
  }

  console.log("wishItems", wishlist);
  
  return (
    <>
      <Header />

      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[0]})` }}
        >
          <p className="product-page"> Home WISHLIST </p>
          <h1 className="product-title">MY WISHLIST</h1>
        </SwiperSlide>
      </Hero>

      <Table>
        {wishlist.map((product) => (
          <ProductRow key={product.title} product={product} deleteFromList={()=>deleteFromList(product.id)} />
        ))}
      </Table>

      <Footer />
    </>
  );
}
