import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";

export const fetchContactInfo = createAsyncThunk("fetchContactInfo", async()=>{
   const res = await apiRequests.get("/contact-info")
   return res.data
})
const slice = createSlice({
   name: "contact info",
   initialState: [],
   reducers:{},
   extraReducers: builder => {
      builder.addCase(fetchContactInfo.fulfilled, (state, action) =>{
         return action.payload
      })
   }
})

export default slice.reducer