import { ADD_CUSTOMER } from "@utils/actionTypes";

const AddCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default AddCustomerReducer;
