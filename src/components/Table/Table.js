import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import "./_Table.scss";

// function createData(title, price, cover) {
//   return { title, price, cover };
// }

// const selectedProducts = [
//   createData("apple", 20, ""),
//   createData("orange", 80, ""),
//   createData("banana", 60, ""),
//   createData("juice", 25, ""),
//   createData("egg", 20, ""),
// ];

// function QuantityInput({ quantity, setQuantity }) {
//   return (
//     <input
//       value={quantity}
//       type="text"
//       onChange={(e) => setQuantity(e.target.value)}
//     />
//   );
// }

// function ProductRow({ product }) {
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <TableRow
//       key={product.name}
//       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//     >
//       <TableCell className="table-body-cell" component="th" scope="row">
//         <IconButton
//           aria-label="delete"
//           size="large"
//           color="black"
//           className="delete-btn"
//         >
//           <DeleteIcon fontSize="inherit" />
//         </IconButton>
//         <img src={product.cover} />
//         {product.title}
//       </TableCell>
//       <TableCell className="table-body-cell" align="center">
//         $ {product.price}
//       </TableCell>
//       <TableCell className="table-body-cell" align="center">
//         <QuantityInput quantity={quantity} setQuantity={setQuantity} />
//       </TableCell>
//       <TableCell className="table-body-cell" align="center">
//         $ {product.price * quantity}
//       </TableCell>
//     </TableRow>
//   );
// }

export default function BasicTable({ children }) {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell className="table-head-cell">Product list</TableCell>
            <TableCell className="table-head-cell" align="center">
              Price
            </TableCell>
            <TableCell className="table-head-cell" align="center">
              Quantity
            </TableCell>
            <TableCell className="table-head-cell" align="center">
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {children}
          {/* {selectedProducts.map((product) => (
            <ProductRow key={product.title} product={product} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
