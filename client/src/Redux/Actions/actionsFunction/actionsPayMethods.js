import { GET_ALL_PAYMETHOD } from '../actions-types/action-types';
import axios from 'axios';
import Swal from 'sweetalert2';

const getAllPayMethods = () => {
    return async function(dispatch) {
        try {
            const response = (await axios.get("/payMethod")).data;
            return dispatch({
                type: GET_ALL_PAYMETHOD,
                payload: response,
      });
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: `${error.response.data.error}`,
                icon: 'error'
              })
        }
    }
}

export default getAllPayMethods