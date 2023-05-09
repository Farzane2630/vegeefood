import React, { useState } from 'react'
import AllRoutes from './Routes'
import store from "./Redux/stores";
import { Provider } from "react-redux";
import { cartContext } from "./Contexts/Contexts";

export default function App() {
   const [value, setValue] = useState(0)
  return (
   <cartContext.Provider value={{
      value,
      setValue
   }}>
   <Provider store={store}>
     <AllRoutes />
   </Provider>
 </cartContext.Provider>
  )
}
