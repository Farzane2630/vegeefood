import React, { useCallback, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/stores";
import { Provider } from "react-redux";
import { cartContext } from "./Contexts/Contexts";

export default function App() {
  const [productQuantity, setProductQuantity] = useState(1);

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
