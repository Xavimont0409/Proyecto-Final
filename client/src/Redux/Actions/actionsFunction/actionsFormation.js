import { POST_FORMAITON } from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
        })
    }
  }
};
