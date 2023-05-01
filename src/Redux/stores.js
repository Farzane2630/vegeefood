import { combineReducers, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { getProductsReducer, bestPriceRreducer } from "./Reducers/products";
import { reducer as backGroundReducer } from "./Reducers/background";
import { reducer as categoryReducer } from "./Reducers/categories";
import { reducer as usersReducer } from "./Reducers/users";
import { reducer as inputValueReducer } from "./Reducers/InputValue";
import { getAllProducsFromServerAction } from "./Reducers/products";
import { getBestPriceProductFromServerAction } from "./Reducers/products";
import { getBgImgFromServerAction } from "./Reducers/background";
import { getAllCategoriesAction } from "./Reducers/categories";
import { getAllUsersInfoFromServerAction } from "./Reducers/users";

const rootReducer = combineReducers({
  products: getProductsReducer,
  bgUrls: backGroundReducer,
  categories: categoryReducer,
  bestPrice: bestPriceRreducer,
  usersInfo: usersReducer,
  inputValue: inputValueReducer,
});

const store = configureStore({
  reducer: rootReducer,
middleware: [thunkMiddleware]
})

store.dispatch(getAllProducsFromServerAction("/products"));
store.dispatch(getBgImgFromServerAction("/heroImages"));
store.dispatch(getAllCategoriesAction("/categories"));
store.dispatch(getBestPriceProductFromServerAction("/best-price"));
store.dispatch(getAllUsersInfoFromServerAction("/usersInfo"));
store.subscribe(() => console.log(store.getState()));

export default store;
