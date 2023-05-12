import {
  GET_ALL_COMPANYS,
  GET_ALL_USERS,
  GET_ALL_VACANTS,
  GET_COMPANY_DETAIL,
  GET_USERS_DETAIL,
  GET_VACANT_DETAIL,
  POST_COMPANY,
  POST_CV,
  POST_USER,
  POST_VACANT,
} from "../Actions/actions-types/action-types";

const initialState = {
  Companys: [],
  CompanyDetail: {},

  Users: [],
  UserDetail: {},

  Vacant: [],
  VacantDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMPANYS:
      return{
        ...state,
        Company : action.payload,
      }
    case GET_COMPANY_DETAIL:
      return{
        ...state,
        CompanyDetail : action.payload,
      }
    case GET_ALL_USERS:
      return{
        ...state,
        Users : action.payload,
      }
    case GET_USERS_DETAIL:
      return{
        ...state,
        UserDetail : action.payload,
      }
    case GET_ALL_VACANTS:
      return {
        ...state,
        Vacant : action.payload,
      }
    case GET_VACANT_DETAIL:
      return {
        ...state,
        VacantDetail : action.payload,
      }
      
      
//! LOS CASOS POST TAMBIEN SE TRAEN AL REDUCER POR BUENAS PRACTICAS
    case POST_COMPANY:
      return {
        ...state,
      }
    case POST_USER:
      return{
        ...state,
      }
    case POST_CV:
      return{
        ...state,
      }
    case POST_CV:
      return{
        ...state,
      }      

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
