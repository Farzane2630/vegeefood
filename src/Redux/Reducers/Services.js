import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";

export const fetchServicesData = createAsyncThunk("fetchServicesData", async ()=>{
   const response = await apiRequests.get("/services")
   return response.data
})

const slice = createSlice({
   name: "services",
   initialState:[],
   reducers:{},
   extraReducers: builder =>{
      builder.addCase(fetchServicesData.fulfilled, (state, action)=>{
         return action.payload
      })
   }
})

export default slice.reducer