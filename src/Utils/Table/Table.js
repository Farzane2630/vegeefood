import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MouseOverPopover from "../Poper";
import { Link } from "react-router-dom";

import "./_Table.scss";

function ProductRow({
  product,
  handleRemoveFromCart,
  wishlist,
  addToCartHandler,
  handleDecreaseCart,
}) {
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
          onClick={handleRemoveFromCart}
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
        ${" "}
        {product.discount
          ? (product.price * (100 - product.discount)) / 100
          : product.price}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        <div className="amount">
          <button onClick={handleDecreaseCart}>-</button>
          <div className="count">{product.cartQuantity}</div>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        {product.discount > 0
          ? product.price *
            ((100 - product.discount) / 100) *
            product.cartQuantity
          : product.price * product.cartQuantity}
      </TableCell>
    </TableRow>
  );
}

export default function BasicTable({
  products,
  handleRemoveFromCart,
  wishlist,
  addToCartHandler,
  handleDecreaseCart,
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
              handleRemoveFromCart={() => handleRemoveFromCart(product)}
              wishlist={wishlist}
              addToCartHandler={() => addToCartHandler(product)}
              handleDecreaseCart={() => handleDecreaseCart(product)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
