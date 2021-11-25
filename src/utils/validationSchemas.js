import * as yup from "yup";

const validationSchema = {
  loginValidationSchema: yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  }),

  changePasswordValidationSchema: yup.object({
    currentPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Field cannot be empty"),
    newPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Field cannot be empty"),
    confirmPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Field cannot be empty")
      .oneOf([yup.ref("newPassword"), null], "New passwords does not match."),
  }),

  createJobValidationSchema: yup.object({
    customer: yup.string().required("Please select Customer"),
    jobType: yup.string().required("Please select Job Type"),
    cargoType: yup.string().required("Please select Cargo Type"),
    assignDriver: yup.string().required("Please select Assign Driver"),
    weight: yup.string().required("Please enter total weight"),
    pieces: yup.string().required("Please enter total pieces"),
    dropLocation: yup.string().required("Drop Off Location is required"),
    jobDesc: yup.string().required("Please enter Description"),
    pickLocation: yup.string().required("Pick Up Location is required"),
  }),

  addAirWayBillValidationSchema: yup.object({
    awbNumber: yup.string().required("Please Enter AWB Number"),
    flight: yup.string().required("Please Enter Flight name"),
    carrier: yup.string().required("Please Enter Carrier "),
    weight: yup.string().required("Please Enter Weight"),
    pieces: yup.string().required("Please Enter Pieces"),
  }),

  addConsignmentValidationSchema: yup.object({
    consignmentNo: yup.string().required("Please Enter Consignment Number"),
  }),

  addConsignmentItemValidationSchema: yup.object({
    itemNo: yup.string().required("Please Enter Item Number"),
    weight: yup.number().required("Please Enter Weight"),
  }),

  addCustomerValidationSchema: yup.object({
    customerName: yup.string().required("Please Enter Customer Name"),
    parentAccount: yup.string().required("Please Enter Item Number"),
    location: yup.string().required("Please Select Parent Account"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup.string().required("Please Enter Phone Number"),
    status: yup.string().required("Please Select Status"),
    period: yup.string().required("Please Select Invoicing Period"),
    jobType: yup.string().required("Please Select Job Type"),
  }),

  issueInvoiceValidationSchema: yup.object({
    issueDate: yup.date().nullable().required("Please select issue date"),
    datePayable: yup.date().nullable().required("Please select payable date"),
    division: yup.array().min(1).required("Please select divison"),
  }),

  resetPasswordValidationSchema: yup.object({
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(8, "Confirm Password should be of minimum 8 characters length")
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Confirm Password and Password must match"),
  }),

  forgotPasswordValidationSchema: yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  }),

  addDriverValidationSchema: yup.object({
    fullName: yup.string().required("Please Enter Full Name"),
    phone: yup.string().required("Please Enter Contact Number"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  }),
};

export default validationSchema;
