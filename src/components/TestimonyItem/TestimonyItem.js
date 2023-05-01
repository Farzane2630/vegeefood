import React from "react";
import { Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "./_TestimonyItem.scss";

export default function TestimonyItem(props ) {
  return (
    <Container className="testimony-container">
      <div className="photo-container">
        <img src={props.src} alt="" className="customer-img" />
        <div className="qoute-icon">
          <FormatQuoteIcon className="icon" />
        </div>
      </div>

      <div className="body">
      <div className="side-line-design">
         <div className="top"></div>
         <div className="middle"></div>
         <div className="top"></div>
      </div>
      <div className="testimony-txt">{props.msg}</div>
      </div>

      <div className="name">{props.name}</div>
    </Container>
  );
}
