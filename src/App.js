import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useParams } from "react-router";
import AllRoutes from "./Routes";
import store from "./Redux/stores";

export default function App() {
  const param = useParams();
  useEffect(
    () => {
      // scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [],
    param
  );

  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}
