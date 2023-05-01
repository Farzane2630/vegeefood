import { apiRequests } from "../../Services/Axios/api";

// -------------------> actionTypes <--------------------------

const getBgImg = {
  get: "GET_IMG_FROM_SERVER",
  success: "GET_seccuss_IMG_FROM_SERVER",
  failiure: "GET_FAILIURE_IMG_FROM_SERVER",
};

// ------------------> reducers <---------------------------- 

export function reducer(state = [], action) {
  switch (action.type) {
    case getBgImg.get: {
      return [...state, ...action.payload];
    }
    case getBgImg.success: {
      let newBg = action.payload
      return [...state, ...newBg];
    }
    case getBgImg.failiure: {
      return [...state, {err: action.payload}];
    }
    default: {
      return state;
    }
  }
}


// ---------------------------> actioncreators <-------------------

export const getBgImgFromServerAction = (url) => {
  return (dispatch) => {
    apiRequests.get(url).
    then(data=>dispatch(getBgImgSuccessAction(data.data)))
  };
};
export const getBgImgSuccessAction = (data) => {
  return {
    type: getBgImg.success,
    payload: data
  };
};
export const getBgImgFailiuresAction = (err) => {
  return {
    type: getBgImg.error,
    payload: err,
  };
};
