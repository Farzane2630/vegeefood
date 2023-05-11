import React, { useCallback, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/stores";
import { Provider } from "react-redux";
import { cartContext } from "./Contexts/Contexts";

export default function App() {
  const [value, setValue] = useState(0);
  const [productID, setProductID] = useState(null);
  const [wishlist, setWishlist] = useState([]);

const addToFavorit = useCallback(((productID, products)=>{
  const favoriteItem = products.find(product=> product.id === productID)
  setWishlist(prev => [...prev , favoriteItem])
}), [productID])
  
  return (
    <cartContext.Provider
      value={{
        value,
        setValue,
        wishlist,
        setWishlist,
        productID, 
        setProductID,
        addToFavorit
      }}
    >
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </cartContext.Provider>
  );
}
