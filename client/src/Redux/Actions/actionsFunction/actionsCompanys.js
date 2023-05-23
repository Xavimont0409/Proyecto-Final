import {
  GET_ALL_COMPANYS,
  GET_COMPANY_DETAIL,
  POST_COMPANY,
} from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

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
      return Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      })
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
      return Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      })
    }
  };
};

export const postCompany = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.post("/company", payload);
      const data = json.data;
      return dispatch({
        type: POST_COMPANY,
        payload: data,
      })
        ? alert("Usuario creado, se envió una notificación al correo ingresado")
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
