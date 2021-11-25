const basic = {
  basic: "",
};
export { basic };

const schema = {
  loginSchema: {
    email: "",
    password: "",
  },

  createJobSchema: {
    customer: "",
    jobType: "",
    cargoType: "",
    assignDriver: "",
    weight: "",
    pieces: "",
    pickLocation: "",
    dropLocation: "",
    jobDesc: "",
  },

  addAirWayBillSchema: {
    awbNumber: "",
    flight: "",
    carrier: "",
    weight: "",
    pieces: "",
  },

  addConsignMentSchema: {
    consignmentNo: "",
    photo: {},
  },

  addConsignMentItemSchema: {
    itemNo: "",
    weight: "",
    addInfo: "",
  },

  addCustomerSchema: {
    customerName: "",
    parentAccount: "",
    location: "",
    email: "",
    phone: "",
    status: "",
    period: "",
    jobType: "",
  },

  issueInvoiceSchema: {
    issueDate: null,
    datePayable: null,
    division: [],
  },

  resetPasswordSchema: {
    password: "",
    confirmPassword: "",
  },

  forgotPasswordSchema: {
    email: "",
  },
  addDriverSchema: {
    fullName: "",
    phone: "",
    email: "",
  },
};

export { schema };
