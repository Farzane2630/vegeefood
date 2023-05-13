import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import dataReducer, {
  fetchCategories,
  fetchProducts,
} from "./Reducers/products";
import backgroundReducer, { fetchBackgroundUrl } from "./Reducers/background";
import categoryReducer, { fetchCategory } from "./Reducers/categories";
import usersReducer, { fetchUsersInfo } from "./Reducers/users";
import { reducer as inputValueReducer } from "./Reducers/InputValue";
import bestPriceReducer, { fetchProductData } from "./Reducers/bestPrice";
import servicesReducer, { fetchServicesData } from "./Reducers/Services";
import wishlistReducer from "./Reducers/Wishlist";
import cartReducer from "./Reducers/Cart";
// import productCountReducer from "./Reducers/ProductCount";

const rootReducer = combineReducers({
  products: dataReducer,
  bgUrl: backgroundReducer,
  categories: categoryReducer,
  bestPrice: bestPriceReducer,
  usersInfo: usersReducer,
  inputValue: inputValueReducer,
  services: servicesReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  // productCount: productCountReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());
store.dispatch(fetchCategory());
store.dispatch(fetchProductData());
store.dispatch(fetchBackgroundUrl());
store.dispatch(fetchUsersInfo());
store.dispatch(fetchServicesData());
store.subscribe(() => console.log(store.getState()));

export default store;
