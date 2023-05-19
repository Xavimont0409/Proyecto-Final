import { FormControl } from 'react-bootstrap';
import { POST_OPERATION_DETAIL } from '../actions-types/action-types';

const postDataInStore = (form) => {
    return { type: POST_OPERATION_DETAIL, payload: form };
}


export default postDataInStore;