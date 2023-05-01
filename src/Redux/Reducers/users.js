import { apiRequests } from "../../Services/Axios/api";
// actionTypes

const getUserInfo = {
  getInfo: "GET_USER_INFO_FROM_SERVER",
  success:" GET_USER_INFO_SUCCESS",
  error: "GET_USER_INFO_ERROR",
};

// reducer

export function reducer(state = [], action) {
  switch (action.type) {
    case getUserInfo.getInfo: {
      return [...state, ...action.payload];
    }
    case getUserInfo.success: {
      return [...state, ...action.payload];
    }
    case getUserInfo.error: {
      return [...state, { error: action.err }];
    }
    default:
      return state;
  }
}


// ActionCreators

export const getAllUsersInfoFromServerAction = (url)=>{
   return dispatch =>{
      apiRequests.get(url).then(
         data => dispatch(getUsersInfoSuccessAction(data.data))
      )
   }
}

export const getUsersInfoSuccessAction = (payload)=>{
   return {
      type: getUserInfo.success,
      payload
   }
}
export const getUsersInfoErrorsAction = (err)=>{
   return {
      type: getUserInfo.success,
    err
   }
}
