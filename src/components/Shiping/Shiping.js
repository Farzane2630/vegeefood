import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

// import freeDelivery from "../../assets/images/free-delivery.png"
// import Cart from "../../assets/images/grocery-cart.png"
// import Quality from "../../assets/images/premium-quality.png"
// import Service from "../../assets/images/customer-service.png"
import "./_Shiping.scss"

export default function Shiping() {
  // const [contents, setContents] = useState([
  //   { url: freeDelivery , title: "Free Shipping", detail: "on order over $100", bg: "#e4b2d6" },
  //   { url: Cart, title: "Always Fresh", detail: "products well packaged", bg: "#dcc698" },
  //   { url: Quality, title: "Superior Quality", detail: "quality products", bg: "#a2d1e1" },
  //   { url: Service, title: "Saport", detail: "24/7 support", bg: "#dcd691" },
  // ]);

  return (
    <Box>
      <Grid container className="grid-container">
        {/* {contents.map((data) => (
          <Grid item className="grid-item" xs={12} sm={3} wrap="no-wrap">
            <div className="icon-container" style={{backgroundColor: `${data.bg}`}}>
             <img src={data.url} alt="" className="icon" />
            </div>
            <div className="script-container">
              <p className="title">{data.title}</p>
               <p className="description">{data.detail}</p>
            </div>
          </Grid>
        ))} */}
      </Grid>
    </Box>
  );
}
