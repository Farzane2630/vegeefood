import React, { useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/stores";
import { Provider } from "react-redux";
import { cartContext } from "./Contexts/Contexts";

export default function App() {
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <cartContext.Provider
      value={{
        productQuantity,
        setProductQuantity,
      }}
    >
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </cartContext.Provider>
  );
}
