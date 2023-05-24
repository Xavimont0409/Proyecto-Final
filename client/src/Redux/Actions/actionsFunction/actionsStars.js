import {
  POST_STARS
} from "../actions-types/action-types";
import axios from 'axios';
import Swal from 'sweetalert2';

export const postStars = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.post("/stars", payload);
      const data = json.data;
      dispatch({
        type: POST_STARS,
        payload: data,
      });
      Swal.fire({
        title: "Exito",
        text: 'Creacion con exito',
        icon: 'success'
      })
      return data;
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      });
      throw error;
    }
  };
};
