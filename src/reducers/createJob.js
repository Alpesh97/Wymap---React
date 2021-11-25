import { CREATE_JOB } from "@utils/actionTypes";

const createJobReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_JOB:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default createJobReducer;
