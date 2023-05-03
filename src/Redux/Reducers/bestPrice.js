import { createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductData = createAsyncThunk(
  "fetchProductsData",
  async () => {
    const response = await apiRequests.get("/best-price");
    return response.data;
  }
);

const slice = createSlice({
  name: "best price",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
