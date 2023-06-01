import React, { useEffect } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/stores";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { getTotalPrice } from "./Redux/Reducers/Cart";

export default function App() {

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}
