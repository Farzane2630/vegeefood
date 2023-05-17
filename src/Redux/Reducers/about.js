import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";

export const fetchAboutData = createAsyncThunk("fetchAboutData", async()=>{
   const res = await apiRequests.get("/about")
   return res.data
})

const slice = createSlice({
   name: "about",
   initialState: {},
   reducers: {},
   extraReducers: builder =>{
      builder.addCase(fetchAboutData.fulfilled, (state, action)=> action.payload)
   }
})

export default slice.reducer