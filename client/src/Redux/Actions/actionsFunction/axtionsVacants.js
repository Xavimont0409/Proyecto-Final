import {
  GET_ALL_VACANTS,
  GET_VACANT_DETAIL,
  POST_VACANT,
  POST_RELATION_VACANT_APPLICANT
} from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

export const getAllVacants = () => {
  return async function (dispatch) {
    try {
      const json = await axios("/job");
      const data = json.data;
      return dispatch({
        type: GET_ALL_VACANTS,
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

export const getVacantDetail = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios(`/job/${id}`);
      const data = json.data;
      return dispatch({
        type: GET_VACANT_DETAIL,
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

export const postVacant = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.post("/job", payload);
      const data = json.data;
      return dispatch({
        type: POST_VACANT,
        payload: data,
      })
        ? alert("creado")
        : data;
    } catch (error) {
      return Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      })
    }
  };
};

export const relationVacantApplicant = async(payload) =>{
  return async function(dispatch){

    try {
      const json = await axios.post("/job/relation", payload)
      const data = json.data;
      return dispatch({
        type: POST_RELATION_VACANT_APPLICANT,
        payload: data,
      })
    } catch (error) {
      return Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      })
    }
  }
}
