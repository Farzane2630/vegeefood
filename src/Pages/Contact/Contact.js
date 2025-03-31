import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { Grid, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./_Contact.scss";
import MapComponent from "../../components/MapComponent";
import { GoogleApiWrapper } from "google-maps-react";

function Contact() {
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

  // onclick handler
  const sendMessageHandler = () => {
    toast.success("Your massage has been sent successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div style={{ backgroundColor: "#f7f6f2" }}>
      <Header indexPage={false} pageTitle="CONTACT US" />
      // contact section
      <Grid
        container
        className="contact-info-container"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <Grid className="contact-info" item sx={12} md={6} lg={3}>
          <div className="contact-div">
            <span>Address:</span>
            <div className="contact-address">{contactInfo.address}</div>
          </div>
        </Grid>
        <Grid className="contact-info" item sx={12} md={6} lg={3}>
          <div className="contact-div">
            <span> Phone: </span>
            {contactInfo.phone}
          </div>
        </Grid>
        <Grid className="contact-info" item sx={12} md={6} lg={3}>
          <div className="contact-div">
            <span>Email: </span>
            {contactInfo.email}
          </div>
        </Grid>
        <Grid className="contact-info" item sx={12} md={6} lg={3}>
          <div className="contact-div">
            <span>Website: </span>
            {contactInfo.website}
          </div>
        </Grid>
      </Grid>
      // map section
      <Grid
        container
        className="map-contactform"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          className="google-map"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <MapComponent
            onMapClicked={onMapClicked}
            state={state}
            containerStyle={containerStyle}
            onMarkerClick={onMarkerClick}
          />
        </Grid>
        <Grid item xs={12} lg={6} className="contact-form-container">
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

          <textarea
            className="msg-txtaria"
            minRows={3}
            placeholder="Message"
            required
          />
          <Button
            variant="contained"
            color="success"
            className="order-btn send-btn"
            onClick={sendMessageHandler}
          >
            <Link to="" className="link">
              Send Message
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default GoogleApiWrapper({
  API_KEY: "AIzaSyC27CF9OshutKTUzV7pKXlkjiCz3vFju7M",
})(Contact);
