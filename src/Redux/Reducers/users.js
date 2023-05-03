import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";

export const fetchUsersInfo = createAsyncThunk("fetchUsersInfo", async ()=>{
  const response = await apiRequests.get("/usersInfo")
  return response.data
})

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers:{},
  extraReducers: builder =>{
    builder.addCase(fetchUsersInfo.fulfilled, (state, action)=>{
      return action.payload
    })
  }
})

export default slice.reducer
