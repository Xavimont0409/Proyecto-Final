import { POST_OPERATION } from '../../Actions/actions-types/action-types';
import axios from 'axios';


const postOperation = ({cost, detail, CompanyId, PayMethodId, ApplicantId}) => {
    return async function(dispatch) {
        try {
            const response = (await axios.post('/operation', { cost, detail, CompanyId, PayMethodId, ApplicantId })).data;
            console.log(response)
            alert(response + '  elisir bebe');
            return dispatch({type: POST_OPERATION, payload: response.preferenceId.body.id});
        } catch (error) {
            alert(error.response.data.error)
        }

    }
}

export default postOperation;