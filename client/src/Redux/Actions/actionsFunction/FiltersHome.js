import {
  FILTER_PER_SENIORITY,
  FILTER_PER_WORDKMETHOD,
  FILTER_PER_TIME,
  GET_EMAIL,
} from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

export const filterPerSeniority = (payload) => {
  return {
    type: FILTER_PER_SENIORITY,
    payload: payload,
  };
};

export const filterPerWordkmethod = (payload) => {
  return {
    type: FILTER_PER_WORDKMETHOD,
    payload: payload,
  };
};

export const filterPerTime = (payload) => {
  return {
    type: FILTER_PER_TIME,
    payload: payload,
  };
};
export const getEmail = (email) => {
  return async function (dispatch) {
    try {
      const json = await axios(`/email?email=${email}`);
      const data = json.data;
      return dispatch({
        type: GET_EMAIL,
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
