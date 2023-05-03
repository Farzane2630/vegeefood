import { createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await apiRequests.get("/products");
  return response.data;
});
export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const response = await apiRequests.get("/categories");
  return response.data;
});

export const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    selectedCategory: "",
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const {selectCategory} = slice.actions;

export default slice.reducer;

// bestPrice
const bestPrice = {
  get: "GET_PRODUCT_FROM_SERVER",
  success: "GET_PRODUCT_SUCCESS",
  failiure: "GET_PRODUCT_FAILIURE",
};

export function bestPriceRreducer(state = {}, action) {
  switch (action.type) {
    case bestPrice.get: {
      let newItem = action.payload;
      return { ...state, newItem };
    }
    case bestPrice.success: {
      let newItem = action.payload;
      return { ...state, ...newItem };
    }
    case bestPrice.failiure: {
      return [...state, { err: action.payload }];
    }
    default: {
      return state;
    }
  }
}
export const getBestPriceProductFromServerAction = (url) => {
  return (dispatch) => {
    apiRequests
      .get(url)
      .then((data) => dispatch(getBestPriceProductSuccessAction(data.data)));
  };
};
export const getBestPriceProductSuccessAction = (data) => {
  return {
    type: bestPrice.success,
    payload: data,
  };
};
export const getBestPriceProductErrorAction = (err) => {
  return {
    type: bestPrice.error,
    payload: err,
  };
};
