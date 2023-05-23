import { LOGIN } from "../actions-types/action-types";

export const login = (payload) => {
  return function(dispatch){
    return dispatch({
      type: LOGIN,
      payload: payload
    })
  }
};
