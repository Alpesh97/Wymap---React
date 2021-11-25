import { ADD_AWB } from "@utils/actionTypes";

const addAWBReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_AWB:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default addAWBReducer;
