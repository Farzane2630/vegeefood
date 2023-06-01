import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { cartContext } from "../../Contexts/Contexts";
import MouseOverPopover from "../Poper";
import { Link } from "react-router-dom";

import "./_Table.scss";
import { useSelector } from "react-redux";

function QuantityInput({ quantity, setQuantity }) {
  return (
    <input
      value={quantity}
      type="text"
      onChange={(e) => {
        setQuantity(e.target.value);
      }}
    />
  );
}

function ProductRow({ product, deleteFromList, wishlist, addToCartHandler }) {
  const [quantity, setQuantity] = useState(1);

  // const totalPrice = useSelector(state=>state.totalPrice)
  // console.log("total price: ",totalPrice);

  //total quantity
  const context = React.useContext(cartContext);

  useEffect(() => {
    context.setProductQuantity(quantity);
  }, [quantity, setQuantity]);

  return (
    <TableRow
      key={product.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        className="table-body-cell"
        component="th"
        scope="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "5%",
        }}
      >
        <IconButton
          onClick={deleteFromList}
          aria-label="delete"
          size="large"
          color="black"
          className="delete-btn"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <div className="add-to-cart-btn" onClick={addToCartHandler}>
          {wishlist ? (
            <MouseOverPopover path="" PopOverTxt="ADD to CART!" />
          ) : (
            ""
          )}
        </div>
        <Link to={`/product-info/${product.id}`} className="link">
          <img src={product.cover} className="whishItem-img" />
        </Link>
        {product.title}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        $ {product.price}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        <QuantityInput
          className="count-input"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        {product.discount !== 0
          ? ` $ ${
              ((product.price * (100 - product.discount)) / 100) * quantity
            }`
          : `$ ${product.price * quantity}`}
      </TableCell>
    </TableRow>
  );
}

export default function BasicTable({
  products,
  deleteFromList,
  wishlist,
  addToCartHandler,
}) {
  return (
    <TableContainer className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell className="table-head-cell">
              Product name and cover{" "}
            </TableCell>
            <TableCell className="table-head-cell" align="right">
              price
            </TableCell>
            <TableCell className="table-head-cell" align="right">
              Quantity
            </TableCell>
            <TableCell className="table-head-cell" align="right">
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <ProductRow
              key={product.title}
              product={product}
              deleteFromList={() => deleteFromList(product.id)}
              wishlist={wishlist}
              addToCartHandler={() => addToCartHandler(product.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
