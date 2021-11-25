import { ISSUE_INVOICE } from "@utils/actionTypes";

const issueInvoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case ISSUE_INVOICE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default issueInvoiceReducer;
