import { GET_ALL_PAYMETHOD } from '../actions-types/action-types';
import axios from 'axios';

const getAllPayMethods = () => {
    return async function(dispatch) {
        try {
            const response = (await axios.get("/payMethod")).data;
            console.log(response)
            return dispatch({
                type: GET_ALL_PAYMETHOD,
                payload: response,
      });
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export default getAllPayMethods