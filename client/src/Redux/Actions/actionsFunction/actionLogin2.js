import { LOGIN_APPLICANT, LOGIN_COMPANY } from '../actions-types/action-types'
import axios from 'axios'

export const getLoginApplicant = (payload) =>{
  return async function(dispatch){
    try {
      const json = await axios.post('/login/applicant', payload)
      const data = json.data
      console.log(data);
      return dispatch({
        type: LOGIN_APPLICANT,
        payload: data
      })
    } catch (error) {
      alert(error.response.data.error)
    }
  }
}

export const getCompany = (payload) =>{
  return async function(dispatch){
    try {
      const json = await axios.post('/login/company', payload)
      const data = json.data
      return dispatch({
        type: LOGIN_COMPANY,
        payload: data
      })
    } catch (error) {
      alert(error.response.data.error)
    }
  }
}