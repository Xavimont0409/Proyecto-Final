import {
  GET_ALL_PRODUCT
} from "../actions-types/action-types";
import axios from "axios";

const getAllProduct = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios(`/product/${id}`);
      const data = json.data;
      return dispatch({
        type: GET_ALL_PRODUCT,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export default getAllProduct
