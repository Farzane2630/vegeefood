import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Grid, TextField, Button } from "@mui/material";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from "react-router-dom";

import "./_Contact.scss";

function Contact() {
  const bg = useSelector((state) => state.bgUrl);
  const contactInfo = useSelector((state) => state.contact);

  //map
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker, e) =>
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onMapClicked = (props) => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={{ backgroundColor: "#f7f6f2" }}>
      <Header />

      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home CONTACT US </p>
          <h1 className="product-title">MY CONTACT US</h1>
        </SwiperSlide>
      </Hero>
      <Grid
        container
        className="contact-info-container"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <Grid className="contact-info address-info" item sx={12} md={3}>
          <div className="contact-info">
            <span>Address:</span>
            {contactInfo.address}
          </div>
        </Grid>
        <Grid className="contact-info" item sx={12} md={3}>
          <div className="contact-info">
            <span> Phone: </span>
            {contactInfo.phone}
          </div>
        </Grid>
        <Grid className="contact-info" item sx={12} md={3}>
          <div className="contact-info">
            <span>Email: </span>
            {contactInfo.email}
          </div>
        </Grid>
        <Grid className="contact-info" item sx={12} md={3}>
          <div className="contact-info">
            <span>Website: </span>
            {contactInfo.website}
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="map-contactform"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <Grid item xs={12} lg={6} className="google-map">
          <Map
            google={window.google}
            onClick={onMapClicked}
            containerStyle={containerStyle}
          >
            <Marker onClick={onMarkerClick} name={"Current location"} />

            <InfoWindow
              marker={state.activeMarker}
              visible={state.showingInfoWindow}
            >
              <div>
                <h1>{state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </Grid>
        <Grid item xs={12} lg={6} className="contact-form-container">
          {/* <div className="contact-form"> */}
          <TextField
            label={"Your Name"}
            id="margin-normal"
            margin="normal"
            fullWidth
          />
          <TextField
            label={"Your Email"}
            id="margin-normal"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label={"Subject"}
            id="margin-normal"
            margin="normal"
            fullWidth
          />
          <textarea className="msg-txtaria" minRows={3} placeholder="Message" />
          <Button
            variant="contained"
            color="success"
            className="order-btn send-btn"
            // onClick={purchaseHandler}
          >
            <Link to="shop" className="link">
              Send Message
            </Link>
          </Button>
          {/* </div> */}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default GoogleApiWrapper({
  API_KEY: "AIzaSyC27CF9OshutKTUzV7pKXlkjiCz3vFju7M",
})(Contact);
