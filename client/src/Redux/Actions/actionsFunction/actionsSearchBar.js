import { FIND_PER_NAME } from "../actions-types/action-types";
import axios from "axios";
import Swal from 'sweetalert2';

export const findPerName = (name) => {
  return async function(dispatch){
    try {
      const json = await axios(`http://localhost:3001/job?name=${name}`)
      const data = json.data
      data.length === 0 
      ?  
      Swal.fire({
        title: "Ops...",
        text: 'No existe Vacante con ese nombre',
        icon: 'error'})
      : dispatch({
        type: FIND_PER_NAME,
        payload : data
      })
    } catch (error) {
      return Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: 'error'
      })
    }
  }
};
