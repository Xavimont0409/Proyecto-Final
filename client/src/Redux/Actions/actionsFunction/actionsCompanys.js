import {
  GET_ALL_COMPANYS,
  GET_COMPANY_DETAIL,
  POST_COMPANY,
} from "../actions-types/action-types";
import axios from "axios";

export const getAllCompanys = () => {
  return async function (dispatch) {
    try {
      const json = await axios("/company");
      const data = json.data;
      return dispatch({
        type: GET_ALL_COMPANYS,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getCompanyDetail = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios(`/company/${id}`);
      const data = json.data;
      return dispatch({
        type: GET_COMPANY_DETAIL,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const postCompany = (payload) => {
  return async function(dispatch){
    try {
      const json = await axios.post('/company', payload)
      const data = json.data
      return dispatch({
        type: POST_COMPANY,
        payload: data
      }) ? alert('creado') : data
    } catch (error) {
      return alert(error.response.data.error)
    }
  }
}