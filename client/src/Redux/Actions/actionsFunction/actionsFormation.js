import { POST_FORMAITON } from "../actions-types/action-types";
import axios from "axios";

export const createFormation = (payload) => {
  return async function(dispatch){
    try {
      const json = await axios.post("/formation", payload)
      const data = json.data
      return dispatch({
        type: POST_FORMAITON,
        payload: data
      })
    } catch (error) {
      alert(error.response.data.error);
    }
  }
};
