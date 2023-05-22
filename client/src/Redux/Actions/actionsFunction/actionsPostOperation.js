import { POST_OPERATION } from '../../Actions/actions-types/action-types';
import axios from 'axios';
import Swal from 'sweetalert2';


const postOperation = ({cost, detail, CompanyId, PayMethodId, ApplicantId, name, email, PayMethod}) => {
    return async function(dispatch) {
        try {
            const response = (await axios.post('/operation', { cost, detail, CompanyId, PayMethodId, ApplicantId, name, email, PayMethod })).data;
            console.log(response)
           dispatch({type: POST_OPERATION, payload: response.preferenceId.body.id});
           if(response.detail){
            Swal.fire({
              title: 'Success',
              text: 'Operación Creada exitosamente',
              html: '<a href="/operation">Ok</a>',
              icon: 'success'
            })
          }
            return 
        } catch (error) {
            Swal.fire({
                title: 'Ops...',
                text: `${error.response.data.error}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }

    }
}

export default postOperation;