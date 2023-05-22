import { GET_ALL_PRODUCT } from "../actions-types/action-types";
import axios from "axios";

const getAllProduct = (id) => {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/product/${id}`)).data;
      return dispatch({
        type: GET_ALL_PRODUCT,
        payload: response,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export default getAllProduct
