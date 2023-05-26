import {
  GET_ALL_COMPANYS,
  GET_ALL_PAYMETHOD,
  GET_ALL_PRODUCT,
  GET_ALL_USERS,
  GET_ALL_VACANTS,
  GET_COMPANY_DETAIL,
  GET_USERS_DETAIL,
  GET_VACANT_DETAIL,
  POST_COMPANY,
  POST_CV,
  POST_OPERATION_DETAIL,
  POST_USER,
  POST_VACANT,
  POST_OPERATION,
  POST_RELATION_VACANT_APPLICANT,
  POST_STARS,
  POST_EXPE,
  FILTER_PER_SENIORITY,
  FILTER_PER_WORDKMETHOD,
  FIND_PER_NAME,
  FILTER_PER_TIME,
  GET_EMAIL,
  CLEAN_DETAIL,
  LOGIN,
  LOGIN_COMPANY,
  LOGIN_APPLICANT,
  GET_ALL_CV,
  GET_CV_BY_ID
} from "../Actions/actions-types/action-types";

const initialState = {
  Company: [],
  CompanyDetail: [],

  Product: {},

  Information: {},
  PreferenceId:"",

  stars: "",

  Users: [],
  UserDetail: {},

  Vacant: [],
  AuxVacant: [],
  AuxVacant2: [],
  VacantDetail: {},
  Cv: [],
  CvDetail:{},

  dataEmail: [],

  PayMethods: [],

  filtrosCombinados: [],

  login : false
};

const Reducer = (state = initialState, action) => {
  let auxFiltros = state.filtrosCombinados
  switch (action.type) {
    case CLEAN_DETAIL:
      return {
        ...state,
        Product: {}
      }
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
      case GET_ALL_PAYMETHOD:
        return {
          ...state,
          PayMethods: action.payload,
        };
    case GET_ALL_PRODUCT:
      return {
        ...state,
        Product: action.payload,
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

    case GET_ALL_CV:
      return {
        ...state,
        Cv: action.payload,
      };  

      case GET_CV_BY_ID:
        return {
          ...state,
          CvDetail: action.payload,
        };  

    case GET_EMAIL:
      return {
        ...state,
        dataEmail: action.payload,
      }  

    case FILTER_PER_SENIORITY:
        const seniorityVacant = auxFiltros.length === 0 ? state.AuxVacant : auxFiltros
  
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
      const wordkmethodVacant =  auxFiltros.length === 0 ? state.AuxVacant : auxFiltros
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
        filtrosCombinados: filterPerWordkmethod
      };
    case FIND_PER_NAME:
      return {
        ...state,
        Vacant: action.payload,
      }
    case FILTER_PER_TIME:
      const timeVacant = auxFiltros.length === 0 ? state.AuxVacant : auxFiltros
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
        Vacant: filterPerTime,
        filtrosCombinados: filterPerTime
      }
    case LOGIN : 
    const confirmacion = action.payload === true ? true : false
          return {
        ...state,
        login: confirmacion
      }      

    //! LOS CASOS POST TAMBIEN SE TRAEN AL REDUCER POR BUENAS PRACTICAS
    case LOGIN_COMPANY:
      return{
        ...state,
        dataEmail: action.payload
      }
    case LOGIN_APPLICANT:
      return{
        ...state,
        dataEmail: action.payload
      }  
    case POST_COMPANY:
      return {
        ...state,
      };
    case POST_OPERATION_DETAIL:
      return {
        ...state, Information: action.payload,
      }
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
    case POST_OPERATION:
      return {
        ...state,
        PreferenceId: action.payload
      };
    case POST_RELATION_VACANT_APPLICANT:
      return{
        ...state,
      }
    case POST_STARS:
      return {
        ...state,
        stars: action.payload,
      };
    case POST_EXPE:
      return {
        ...state,
      }    
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
