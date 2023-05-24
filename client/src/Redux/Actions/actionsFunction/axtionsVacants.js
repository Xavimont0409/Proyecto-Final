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
        ? 
        Swal.fire({
        title: "Exito",
        text: 'Creacion con exito',
        icon: 'success'
      })
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

export const relationVacantApplicant = (payload) =>{
  return async function(dispatch){

    try {
      const json = await axios.post("/job/relation", payload)
      const data = json.data;
    dispatch({
        type: POST_RELATION_VACANT_APPLICANT,
        payload: data,
      });

      return Swal.fire({
        title: "Postulación exitosa",
        text: '¡Felicitaciones!, Has aplicado a la vacante, revisa tu email te hemos enviado una notificación',
        icon: 'success'
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
