import React from "react";
import TopContactbar from "../TopContactbar/TopContactbar";
import NavBar from "../Navbar/NavBar";
import Hero from "../Hero/Hero";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header({ indexPage, pageTitle }) {
  const bg = useSelector((state) => state.bgUrl);

  return (
    <>
      <TopContactbar />
      <NavBar />
      <Hero indexPage={indexPage}>
        {indexPage ? (
          <>
            <SwiperSlide
              className="slide-1"
              style={{
                backgroundImage: `url(${bg[0].url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.5,
                  background: "black",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></div>
              <h1 className="mb-2 index-title"> 100% Fresh & Organic Fruits</h1>
              <h2 className="index-sub-title">
                {" "}
                We Deliver Organic Vegetables & Fruits{" "}
              </h2>
              <Button
                variant="contained"
                color="success"
                style={{ marginBottom: "10rem" }}
              >
                <Link className="link" to="about">
                  View Details
                </Link>
              </Button>
            </SwiperSlide>

            <SwiperSlide
              className="slide-2"
              style={{
                backgroundImage: `url(${bg[2].url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.5,
                  background: "black",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></div>
              <h1 className="mb-2 index-title"> 100% Fresh & Organic Fruits</h1>
              <h2 className="index-sub-title">
                {" "}
                We Serve Fresh Vegetables & Fruits{" "}
              </h2>
              <Button variant="contained" color="success">
                <Link className="link" to="about">
                  View Details
                </Link>
              </Button>
            </SwiperSlide>
          </>
        ) : (
          <SwiperSlide
            className="slide-1"
            style={{
              backgroundImage: `url(${bg[1].url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                opacity: 0.5,
                background: "black",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <h1
                className="product-title"
                style={{ marginTop: "10%", opacity: 1 }}
              >
                {pageTitle}
              </h1>
            </div>
          </SwiperSlide>
        )}
      </Hero>
    </>
  );
}
