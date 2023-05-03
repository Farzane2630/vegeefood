import { createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
  "fetchCategory",
  async () => {
    const response = await apiRequests.get("/categories");
    return response.data;
  }
);

const slice = createSlice({
  name: "allCategory",
  initialState: [],
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
