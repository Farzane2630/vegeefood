import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./_InfoTable.scss";

export default function InputAdornments() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      className="form-container"
    >
      <div>
        <TextField
          className="half-width"
          label="First name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          className="half-width"
          label="Last name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
      <div>
      <TextField
          className="full-width"
          label="Country / State"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
      <div>
        <TextField
          className="half-width"
          label="Street Address"
          placeholder="Hous number and street name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          className="half-width"
          //  label="Last name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          placeholder="Appartment,unit(etc):optional"
        />
      </div>
      <div>
        <TextField
          className="half-width"
          label="Town City"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          className="half-width"
          label="Postcode / ZIP *"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
      <div>
        <TextField
          className="half-width"
          label="Phone"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          className="half-width"
          label="Email Address"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
    </Box>
  );
}
