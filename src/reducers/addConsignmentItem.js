import { ADD_CONSIGNMENT_ITEM } from "@utils/actionTypes";

const AddConsignmentItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONSIGNMENT_ITEM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default AddConsignmentItemReducer;
