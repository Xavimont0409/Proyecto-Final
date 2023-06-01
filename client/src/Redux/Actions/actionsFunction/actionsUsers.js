import {
  GET_ALL_USERS,
  GET_USERS_DETAIL,
  POST_USER,
  POST_CV,
  POST_EXPE,
  UPDATE_APPLICATION
} from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const json = await axios("/applicant");
      const data = json.data;
      return dispatch({
        type: GET_ALL_USERS,
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

export const getUserDetail = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios(`/applicant/${id}`);
      const data = json.data;
      return dispatch({
        type: GET_USERS_DETAIL,
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

export const postUser = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.post("/applicant", payload);
      const data = json.data;
      return dispatch({
        type: POST_USER,
        payload: data,
      })
        ? 
        Swal.fire({
        title: "Exito",
        text: 'Usuario creado, se envió una notificación al correo ingresado',
        icon: 'success'})
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

export const postCv = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.post("/createCv", payload);
      const data = json.data;
      return dispatch({
        type: POST_CV,
        payload: data,
      })
        ? 
        Swal.fire({
        title: "Exito",
        text: 'Creacion con exito',
        icon: 'success'})
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

export const postExpe = (payload) =>{
  return async function (dispatch) {
  try {
    const json = await axios.post("/experience", payload);
    const data = json.data
    return dispatch({
      type: POST_EXPE,
      payload: data
    }) 
      ? 
      Swal.fire({
        title: "Exito",
        text: 'Creacion con exito',
        icon: 'success'})
      : data
  } catch (error) {
    return Swal.fire({
      title: "Error",
      text: `${error.response.data.error}`,
      icon: 'error'
    })
  }
  }
}


export  const  updateMyApplications =  (id, title, Vacants) => {

  return async function(dispatch){
    try {
       await axios.put(`/applicant/${id}`, Vacants)
    //   const data = json.data;
    // dispatch({
    //     type: UPDATE_APPLICATION,
    //     payload: data,
    //   });
      return Swal.fire({
        title: "Informacion",
        text: `Se ha cancelado tu postulacion a la vacante ${title}`,
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