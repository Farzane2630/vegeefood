import { apiRequests } from "../../Services/Axios/api";

// get all products
const getAllProducs = {
  all: "GET_ALL_PRODUCTS",
  success: "GET_ALL_PRODUCTS_SUCCESS",
  error: "GET_ALL_PRODUCTS_ERROR",
  filter: "FILTER_PRODUCTS",
  category: "SELECTED_CATEGORY",
};

const initialState = {
  products: [],
  filteredProducts: []
};

export function getProductsReducer(state = initialState, action) {
  switch (action.type) {
    case getAllProducs.all: {
      let newProducts = action.payload;
      let allProducts = state.products;
      return { allProducts, newProducts };
    }
    case getAllProducs.success: {
      return { ...state, products: action.payload };
    }
    case getAllProducs.filter:
      let filteredProducts = state.products.filter((product) => {
        return product.category === action.category;
      });

      return  {products: state.products, filteredProducts }
    case getAllProducs.error: {
      return [state, { error: action.payload }];
    }
    default: {
      return state;
    }
  }
}

export const getAllProducsFromServerAction = (url) => {
  return function (dispatch, getState) {
    apiRequests.get(url).then((data) => {
      dispatch(getAllProducsSuccessAction(data.data));
    });
  };
};
export const getAllProducsSuccessAction = (data) => {
  return {
    type: getAllProducs.success,
    payload: data,
  };
};
export const filterProductsAction = (payload, category) => {
  return {
    type: getAllProducs.filter,
    payload,
    category,
  };
};
export const selectCategory = (category) => {
  return { type: getAllProducs.category, payload: category };
};
export const getAllProducsErrorAction = (error) => {
  return { type: getAllProducs.error, payload: error };
};

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
