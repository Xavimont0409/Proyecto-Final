import { FIND_PER_NAME } from "../actions-types/action-types";
import axios from "axios";

export const findPerName = (name) => {
  return async function(dispatch){
    try {
      const json = await axios(`http://localhost:3001/job?name=${name}`)
      const data = json.data
      return dispatch({
        type: FIND_PER_NAME,
        payload : data
      })
    } catch (error) {
      return alert(error.response.data.error);
    }
  }
};
