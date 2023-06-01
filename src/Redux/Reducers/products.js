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

export const fetchProductCount = createAsyncThunk(
  "fetchProductCount",
  async (products, productID) => {
    const mainProduct = await products.find(
      (product) => product.id === productID
    );

    return mainProduct.count;
  }
);

export const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    selectedCategory: "",
    totalPrice: 0,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    totalPrice: (state, action, productID) => {
      
      const mainItemTotalPrice = state.products.find(
        (products) => products.id === productID
      ).totalPrice;
      state.totalPrice = mainItemTotalPrice;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchProductCount.fulfilled, (state, action) => {
      state.productCount = action.payload;
    });
  },
});

export const { selectCategory, totalPrice } = slice.actions;

export default slice.reducer;
