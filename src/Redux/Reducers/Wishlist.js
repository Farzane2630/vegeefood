const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addTolist: (state, action) => [...state, action.payload],
    removeFromList: (state, action) => {
     const newState = state.filter(product => product.id !== action.payload.id)
     return newState
    },
  },
});

export const { addTolist, removeFromList } = slice.actions
export default slice.reducer
