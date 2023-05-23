import { POST_OPERATION } from '../../Actions/actions-types/action-types';
import axios from 'axios';
import Swal from 'sweetalert2';


const postOperation = ({cost, detail, details, CompanyId, PayMethodId, ApplicantId, name, email, PayMethod}) => {


    return async function(dispatch) {
        try {
            const response = (await axios.post('/operation', { cost, detail, details, CompanyId, PayMethodId, ApplicantId, name, email, PayMethod })).data;           
            return dispatch({type: POST_OPERATION, payload: response.preferenceId.body.id});
        } catch (error) {
           return Swal.fire({
                title: 'Ops...',
                text: `${error.response.data.error}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }

    }
}

export default postOperation;