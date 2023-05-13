import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
   name: "cart items",
   initialState: [],
   reducers: {
      addToCart : (state, action)=> [...state, action.payload],
      removeFromCart: (state, action)=> action.payload
   }
})

export const {addToCart, removeFromCart} = slice.actions
export default slice.reducer