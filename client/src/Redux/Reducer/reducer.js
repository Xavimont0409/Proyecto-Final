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
} from "../Actions/actions-types/action-types";

const initialState = {
  Company: [],
  CompanyDetail: {},

  Users: [],
  UserDetail: {},

  Vacant: [],
  AuxVacant: [],
  AuxVacant2: [],
  VacantDetail: {},

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
