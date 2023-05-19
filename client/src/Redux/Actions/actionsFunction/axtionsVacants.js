import {
  GET_ALL_VACANTS,
  GET_VACANT_DETAIL,
  POST_VACANT,
  POST_RELATION_VACANT_APPLICANT
} from "../actions-types/action-types";
import axios from "axios";

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
      alert(error.response.data.error);
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
      alert(error.response.data.error);
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
      return alert(error.response.data.error);
    }
  };
};

export const relationVacantApplicant = async(payload) =>{
  try {
    const json = await axios.post("/job/relation", payload)
    const data = json.data;
    return dispatch({
      type: POST_VACANT_APPLICANT,
      payload: data,
    })
  } catch (error) {
    return alert(error.response.data.error);
  }
}
