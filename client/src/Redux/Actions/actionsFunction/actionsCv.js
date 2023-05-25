import {
  GET_ALL_CV, GET_CV_BY_ID
} from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';


export const getAllCv = () => {
  return async function (dispatch) {
    try {
      const json = await axios('/createCv');
      const data = json.data;
      return dispatch({
        type: GET_ALL_CV,
        payload: data,
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


export const getCvById = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios(`/createCv/${id}`);
      const data = json.data;
      return dispatch({
        type: GET_CV_BY_ID,
        payload: data,
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
