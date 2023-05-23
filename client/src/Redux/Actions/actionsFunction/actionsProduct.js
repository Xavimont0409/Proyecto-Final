import { GET_ALL_PRODUCT } from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

const getAllProduct = (id) => {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/product/${id}`)).data;
      return dispatch({
        type: GET_ALL_PRODUCT,
        payload: response,
      });
    } catch (error) {
      return Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      })
    }
  };
};

export default getAllProduct
