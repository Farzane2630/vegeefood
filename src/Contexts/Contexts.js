import { createContext } from "react";


export const cartContext = createContext({
   value: 0,
   productID: null,
   wishlist: [],
   addToFavorit: ()=>{}
})


