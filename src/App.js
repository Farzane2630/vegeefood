import React, { useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/stores";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { useParams } from "react-router";

export default function App() {
  const { param } = useParams();
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [param]);
=======
import { Provider } from "react-redux"; 
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
>>>>>>> parent of e510e0c (webpack --> vite)

  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}
