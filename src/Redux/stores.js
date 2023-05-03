import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { bestPriceRreducer, fetchCategories, fetchProducts } from "./Reducers/products";
import { reducer as backGroundReducer } from "./Reducers/background";
import { reducer as categoryReducer } from "./Reducers/categories";
import { reducer as usersReducer } from "./Reducers/users";
import { reducer as inputValueReducer } from "./Reducers/InputValue";
import dataReducer from "./Reducers/products";
import { getBestPriceProductFromServerAction } from "./Reducers/products";
import { getBgImgFromServerAction } from "./Reducers/background";
import { getAllCategoriesAction } from "./Reducers/categories";
import { getAllUsersInfoFromServerAction } from "./Reducers/users";
// import selectCategory from "./Reducers/products";

const rootReducer = combineReducers({
  products: dataReducer,
  bgUrls: backGroundReducer,
  categories: categoryReducer,
  bestPrice: bestPriceRreducer,
  usersInfo: usersReducer,
  inputValue: inputValueReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());
// store.dispatch(selectCategory());
store.dispatch(getBgImgFromServerAction("/heroImages"));
store.dispatch(getAllCategoriesAction("/categories"));
store.dispatch(getBestPriceProductFromServerAction("/best-price"));
store.dispatch(getAllUsersInfoFromServerAction("/usersInfo"));
store.subscribe(() => console.log(store.getState()));

export default store;
