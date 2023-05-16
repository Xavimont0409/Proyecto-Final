import {
  FILTER_PER_SENIORITY,
  FILTER_PER_WORDKMETHOD,
  FILTER_PER_TIME
} from "../actions-types/action-types";

export const filterPerSeniority = (payload) => {
  return {
    type: FILTER_PER_SENIORITY,
    payload: payload,
  };
};

export const filterPerWordkmethod = (payload) => {
  return {
    type: FILTER_PER_WORDKMETHOD,
    payload: payload,
  };
};

export const filterPerTime = (payload)=>{
  return{
    type: FILTER_PER_TIME,
    payload: payload
  }
}