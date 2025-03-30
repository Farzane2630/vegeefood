import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./Style/reset.scss";
import "./Style/Style.scss";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
