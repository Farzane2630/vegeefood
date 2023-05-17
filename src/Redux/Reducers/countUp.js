import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";

export const fetchCountUpData = createAsyncThunk("fetchCountUpData", async () => {
  const response = await apiRequests.get("/countup");
  return response.data;
});

const slice = createSlice({
  name: "count-up",
  initialState: [],
  reducers: {},
  extraReducer: builder => {
    builder.addCase(fetchCountUpData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
