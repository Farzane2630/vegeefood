import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import "./_OurServices.scss";

export default function OurServices({ about }) {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = useSelector((state) => state.services);
  return (
    <Box className={`${about ? "about" : ""}`}>
      <Grid container className="grid-container">
        {services.map((data, index) => (
          <Grid key={index} item className="grid-item" xs={12} sm={3} wrap="no-wrap">
            <div
              className="icon-container"
              style={{ backgroundColor: `${data.bg}` }}
            >
              <img src={data.url} alt="" className="icon" />
            </div>
            <div className="script-container">
              <p className="title">{data.title}</p>
              <p className="description">{data.detail}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      {about ? (
        <div className="about-swipe-up">
          <button onClick={goToTop}>
            <KeyboardDoubleArrowUpIcon className="icon" />
          </button>
        </div>
      ) : (
        ""
      )}
    </Box>
  );
}
