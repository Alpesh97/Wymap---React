import { ADD_CONSIGNMENT } from "@utils/actionTypes";

const AddConsignmentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONSIGNMENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default AddConsignmentReducer;
