import {
  FILTER_PER_SENIORITY,
  FILTER_PER_WORDKMETHOD,
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
