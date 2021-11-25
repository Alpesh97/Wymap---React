import { ADD_DRIVER } from "@utils/actionTypes";

const addDriverReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DRIVER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default addDriverReducer;
