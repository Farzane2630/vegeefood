import React from "react";
import Pagination from "@mui/material/Pagination";
import "./_Pagination.scss"

function CustomPagination({ items, itemsCount, pathname, onPageChange }) {
  const pageCount = Math.ceil(items.length / itemsCount);

  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <div className="pagination-wrapper paigination-parent">
      <Pagination count={pageCount} onChange={handlePageChange} className="pagination" />
    </div>
  );
}

export default CustomPagination;
