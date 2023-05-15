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
  FILTER_PER_SENIORITY,
  FILTER_PER_WORDKMETHOD,
  FIND_PER_NAME,
  FILTER_PER_TIME
} from "../Actions/actions-types/action-types";

const initialState = {
  Company: [],
  CompanyDetail: {},

  Users: [],
  UserDetail: {},

  Vacant: [],
  AuxVacant: [],
  AuxVacant2: [],
  VacantDetail: [],

  filtrosCombinados: [],
};

const Reducer = (state = initialState, action) => {
  let auxFiltros = state.filtrosCombinados
  switch (action.type) {
    case GET_ALL_COMPANYS:
      return {
        ...state,
        Company: action.payload,
      };
    case GET_COMPANY_DETAIL:
      return {
        ...state,
        CompanyDetail: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        Users: action.payload,
      };
    case GET_USERS_DETAIL:
      return {
        ...state,
        UserDetail: action.payload,
      };
    case GET_ALL_VACANTS:
      return {
        ...state,
        Vacant: action.payload,
        AuxVacant: action.payload,
        AuxVacant2: action.payload,
      };
    case GET_VACANT_DETAIL:
      return {
        ...state,
        VacantDetail: action.payload,
      };
    case GET_COMPANY_DETAIL:
      return{

      }  

    case FILTER_PER_SENIORITY:
        const seniorityVacant = auxFiltros.length === 0 ? state.AuxVacant : auxFiltros;
        const filterPerSeniority =
          action.payload === "senior"
            ? seniorityVacant.filter((vacant) => vacant.Seniority.name.includes(action.payload))
            : action.payload === "semiSenior"
            ? seniorityVacant.filter((vacant) => vacant.Seniority.name.includes(action.payload))
            : action.payload === "junior"
            ? seniorityVacant.filter((vacant) => vacant.Seniority.name.includes(action.payload))
            : action.payload === "trainee"
            ? seniorityVacant.filter((vacant) => vacant.Seniority.name.includes(action.payload))
            : state.AuxVacant2;
      return {
        ...state,
        Vacant: filterPerSeniority,
        filtrosCombinados: filterPerSeniority
      };

    case FILTER_PER_WORDKMETHOD:
      const wordkmethodVacant = auxFiltros.length === 0 ? state.AuxVacant : auxFiltros;
      const filterPerWordkmethod =
        action.payload === "presencial"
          ? wordkmethodVacant.filter((vacant) => vacant.WorkMethod.name.includes(action.payload))
          : action.payload === "hibrido"
          ? wordkmethodVacant.filter((vacant) => vacant.WorkMethod.name.includes(action.payload))
          : action.payload === "remoto"
          ? wordkmethodVacant.filter((vacant) => vacant.WorkMethod.name.includes(action.payload))
          : state.AuxVacant2;   
      return {
        ...state,
        Vacant: filterPerWordkmethod,
      };
    case FIND_PER_NAME:
      return {
        ...state,
        Vacant: action.payload,
      }
    case FILTER_PER_TIME:
      const timeVacant = auxFiltros.length === 0 ? state.AuxVacant : auxFiltros;
      let hoy = new Date();
      let dia = hoy.getDate();
      let month = hoy.getMonth() + 1
      let anios = hoy.getFullYear()
        dia = ('0' + dia).slice(-2)
        month = ('0' + month).slice(-2)
      const filterPerTime = 
        action.payload === 'Hoy'
        ? timeVacant.filter((vacant)=> vacant.createdAt.slice(0,10) === `${anios}-${month}-${dia}`)
        : action.payload === 'Esta semana'
        ? timeVacant.filter((vacant)=> vacant.createdAt.slice(0,10) > `${anios}-${month}-${dia - 8}`)
        : action.payload === 'Este mes'
        ? timeVacant.filter((vacant)=> vacant.createdAt.slice(0,10) > `${anios}-${month - 1}-${dia}`)
        : state.AuxVacant2     
      return{
        ...state,
        Vacant: filterPerTime
      }    

    //! LOS CASOS POST TAMBIEN SE TRAEN AL REDUCER POR BUENAS PRACTICAS
    case POST_COMPANY:
      return {
        ...state,
      };
    case POST_USER:
      return {
        ...state,
      };
    case POST_CV:
      return {
        ...state,
      };
    case POST_VACANT:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
