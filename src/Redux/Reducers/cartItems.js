import { createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartItems = createAsyncThunk("fetchCartItems", async () => {
  const res = await apiRequests.get("/cartItems");
  return res.data;
});

export const addToCart = createAsyncThunk(
  "cartItems",
  async ({
    id,
    title,
    price,
    quantity,
    rate,
    sold,
    cover,
    inStock,
    category,
    discount,
  }) => {
    const newObj = {
      id,
      title,
      price,
      quantity,
      rate,
      sold,
      cover,
      inStock,
      category,
      discount,
    };
    const res = await apiRequests.post(`/cartItems`, newObj);

    console.log(res.data);

    return res.data;
  }
);
export const updateTotalPrice = createAsyncThunk(
  "updateTotalPrice",
  async (
    {
      id,
      title,
      price,
      quantity,
      rate,
      sold,
      cover,
      inStock,
      category,
      discount,
    }
  ) => {
    const newObj = {
      id,
      title,
      price,
      quantity,
      rate,
      sold,
      cover,
      inStock,
      category,
      discount,
    };
    const res = await apiRequests.put(`/cartItems/${id}`, newObj);

    return res.data;
  }
);

export const removeFromCart = createAsyncThunk("removeFromCart", async (id) => {
 const res = await apiRequests.delete(`/cartItems/${id}`);
  return res.data;
});

const slice = createSlice({
  name: "cart items",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(updateTotalPrice.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      return newState;
    });
  },
});

export default slice.reducer;
