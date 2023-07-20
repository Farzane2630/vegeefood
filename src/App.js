<<<<<<< HEAD
import { Provider } from "react-redux";
import { useParams } from "react-router";
import { Provider } from "react-redux";
=======
import React, { useEffect } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/stores";
import { Provider } from "react-redux"; 
>>>>>>> parent of e510e0c (webpack --> vite)
import { useParams } from "react-router";

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
