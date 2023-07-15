import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Style/reset.scss";
import "./Style/Style.scss";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
      <App />
    </HashRouter>
);
