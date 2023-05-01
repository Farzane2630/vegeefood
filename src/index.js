import React from "react";
import { HashRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import AllRoutes from "./Routes";
import store from "./Redux/stores"

import "./Style/reset.scss";
import "./Style/Style.scss";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  </HashRouter>
);
