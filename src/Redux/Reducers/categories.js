import { apiRequests } from "../../Services/Axios/api";

//action types
const getCategories = {
  all: "GET_ALL_CATEGORIES",
  success: "GET_ALL_CATEGORIES_SUCCESS",
  error: "GET_ALL_CATEGORIES_ERROR",
};

//reducers

export function reducer(state = [], action) {
  switch (action.type) {
    case getCategories.all: {
      let newCategories = action.payload;
      return [...state, newCategories];
    }
    case getCategories.success: {
      let newCategories = action.payload;
      return [...state, ...newCategories];
    }
    case getCategories.error: {
      return [...state, { error: action.payload }];
    }
    default: {
      return state;
    }
  }
}

//action creators
export const getAllCategoriesAction = (url) => {
  return (dispatch) => {
    apiRequests.get(url).then((data) => dispatch(getCategoriesSuccessAction(data.data)));
  };
};

export const getCategoriesSuccessAction = (data)=>{
  return {
    type: getCategories.success,
    payload: data
  }
}
export const getCategoriesErrorAction = (err)=>{
  return {
    type: getCategories.error,
    payload: err
  }
}
