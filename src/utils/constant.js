const colors = {
  primary: "#00548e",
  white: "#FFFFFF",
  black: "#212121",
  graybg: "#5b646b",
  orange: "#f79239",
  red: "#ff4848",
  skyblue: "#00aeef",
  grayborder: "#e3e3e3",
  lightBlack: "#464646",
  lightGray: "#f8f8f8",
  borderGray: "#e7e4f1",
  darkRed: "#e40000",
  darkRed1: "#eb5757",
  darkBlue: "#1e3669",
  lightBlue: "#0088ce",
  yellow: "#f5c32e",
  green: "#27ae60",
  gray1: "#3b3f49",
  gray2: "#787878",
  light_black: "#686868",
  black1: "#3b3f49",
  black2: "#161c2c",
  gray3: "#84868b",
  gray4: "#9c9ea2",
  gray5: "#f9f9f9",
};

const routes = {
  pageNotFound: "/page-not-found",
  login: "/login",
  jobDetail: "/job-detail",
  dashboard: "/dashboard",
  jobListing: "/job-listing",
  driverListing: "/driver-listing",
  driverDetail: "/driver-detail",
  customerDetail: "/customer-detail",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  customerListing: "/customer-listing",
  notifications: "/notifications",
  myProfile: "/my-profile",
  trucks: "/trucks",
  tollLocation: "/toll-location",
};

const dashboardListingHeader = [
  { title: "Job ID", className: "jobId" },
  { title: "Customer Name", className: "customerName" },
  { title: "From / To", className: "fromTo" },
  { title: "Air Way Bill", className: "airWarBill" },
  { title: "Date", className: "date" },
  { title: "Truck Rego", className: "truck-rego" },
  { title: "Driver", className: "driver" },
  { title: "Status", className: "status" },
];

const customerListingHeader = [
  { title: "Customer", className: "customer" },
  { title: "Address", className: "address" },
  { title: "Email", className: "email" },
  { title: "Phone", className: "phone" },
  { title: "Last Activity", className: "last-activity" },
];

const customerDetailJobsHeader = [
  { title: "Job ID", className: "jobId" },
  { title: "Date", className: "date" },
  { title: "Truck Rego", className: "truck-rego" },
  { title: "Driver", className: "driver" },
  { title: "Job Type", className: "jobType" },
  { title: "Status", className: "status" },
];

const customerDetailInvoiceHeader = [
  { title: "Invoice Id", className: "invoice" },
  { title: "Date", className: "date" },
  { title: "Total Weight", className: "total-weight" },
  { title: "Total Pieces", className: "total-pieces" },
  { title: "Nett", className: "nett" },
  { title: "Tax", className: "tax" },
  { title: "Gross", className: "gross" },
];

const driverListingHeader = [
  { title: "Driver Name", className: "driverName" },
  { title: "Employee Number", className: "employeeNumber" },
  { title: "Contact Phone", className: "contact" },
  { title: "Working Time Today", className: "workingTimeToday" },
  { title: "Continious Working Time", className: "continiousWorkingTime" },
  { title: "Status", className: "status" },
];

const dashboardListing = [
  {
    jobId: "ABCD1223",
    cName: "Z-Import Pty Ltd",
    fromTo: "456 Street, Sydney, NSW 2000",
    airBill: "258-2345 8002, 932-2345 3402",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Assign Driver",
    status: "Complete",
  },
  {
    jobId: "ABCD1223",
    cName: "Z-Import Pty Ltd",
    fromTo: "456 Street, Sydney, NSW 2000",
    airBill: "258-2345 8002, 932-2345 3402",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Re-Assign",
    status: "In Progress",
  },
  {
    jobId: "ABCD1223",
    cName: "Z-Import Pty Ltd",
    fromTo: "456 Street, Sydney, NSW 2000",
    airBill: "258-2345 8002, 932-2345 3402",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Assign Driver",
    status: "Complete",
  },
  {
    jobId: "ABCD1223",
    cName: "Z-Import Pty Ltd",
    fromTo: "456 Street, Sydney, NSW 2000",
    airBill: "258-2345 8002, 932-2345 3402",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Re-Assign",
    status: "Not Assigned",
  },
  {
    jobId: "ABCD1223",
    cName: "Z-Import Pty Ltd",
    fromTo: "456 Street, Sydney, NSW 2000",
    airBill: "258-2345 8002, 932-2345 3402",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Assign Driver",
    status: "Rejected",
  },
];

const addWayBillsData = [
  {
    id: "248-2345 5002",
    flight: "SQ 0231 25 May, 10:09 (A)",
    carrier: "Emirates",
    weight: "500 Kg",
    pieces: "0/10",
    ULD: "AKE 23254 QA, AKE 09234 AF, AKE 223210 AF",
    notes: "3 pc with ULD: AKE 23492 QA",
    status: "Loaded",
  },
  {
    id: "248-2345 5002",
    flight: "SQ 0231 25 May, 10:09 (A)",
    carrier: "Emirates",
    weight: "500 Kg",
    pieces: "0/10",
    ULD: "AKE 23254 QA, AKE 09234 AF, AKE 223210 AF",
    notes: "3 pc with ULD: AKE 23492 QA",
    status: "Loaded",
  },
  {
    id: "248-2345 5002",
    flight: "SQ 0231 25 May, 10:09 (A)",
    carrier: "Emirates",
    weight: "500 Kg",
    pieces: "0/10",
    ULD: "AKE 23254 QA, AKE 09234 AF, AKE 223210 AF",
    notes: "3 pc with ULD: AKE 23492 QA",
    status: "Loaded",
  },
];

const consignMentData = [
  {
    id: "8324 4242 kf",
    data: [
      { consNo: "p-2324", weight: "20.0 kg", widthLength: "W 3.5m L 2.0 m" },
      { consNo: "p-2324", weight: "20.0 kg", widthLength: "W 3.5m L 2.0 m" },
    ],
  },
  {
    id: "8324 4242 kg",
    data: [
      { consNo: "p-2324", weight: "20.0 kg", widthLength: "W 3.5m L 2.0 m" },
      { consNo: "p-2324", weight: "20.0 kg", widthLength: "W 3.5m L 2.0 m" },
    ],
  },
];

const runSheetData = [
  {
    status: "Started the job",
    time: "8:32 - 8:55",
    location: "2-6 Star Ct, Cambridge Gardens NSW 2747",
    duration: "00:23",
  },
  {
    status: "Loading",
    time: "8:32 - 8:55",
    location: "2-6 Star Ct, Cambridge Gardens NSW 2747",
    duration: "00:23",
  },
  {
    status: "Break",
    time: "8:32 - 8:55",
    location: "2-6 Star Ct, Cambridge Gardens NSW 2747",
    duration: "00:23",
  },
  {
    status: "Delivering",
    time: "8:32 - 8:55",
    location: "1008 Botany Rd, Mascot NSW 2020 - Toll road 23 km",
    duration: "00:23",
  },
  {
    status: "Unloading",
    time: "8:32 - 8:55",
    location: "45 Karril Ave, Beecroft NSW 2119",
    duration: "00:23",
  },
];

const customersData = [
  {
    customer: "DHL",
    address: "232 Street, Sydney, NSW 2000",
    email: "email@mail.com",
    phone: "0432 324 489, 0432 324 489",
    lastActivity: "Confirm Invoice",
  },
  {
    customer: "Alpine Import Pty Ltd",
    address: "280 Beames Ave, Mount Druitt NSW 2770",
    email: "email@mail.com",
    phone: "0432 324 489, 0432 324 489",
    lastActivity: "Today",
  },
  {
    customer: "ABC Company Pty Ltd",
    address: "33 Railway St, Rooty Hill NSW 2766",
    email: "email@mail.com, email@mail.com",
    phone: "0432 324 489, 0432 324 489, 0432 324 489, 0432 324 489",
    lastActivity: "18/10/20",
  },
  {
    customer: "ABC Company Pty Ltd",
    address: "33 Railway St, Rooty Hill NSW 2766",
    email: "email@mail.com, email@mail.com",
    phone: "0432 324 489, 0432 324 489, 0432 324 489, 0432 324 489",
    lastActivity: "18/10/20",
  },
];

const customerDetailJobsData = [
  {
    jobId: "234 552",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Anthony Rivera",
    jobType: "Export",
    status: "Not Assigned",
  },
  {
    jobId: "234 554",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Harry Gonzalez",
    jobType: "Export",
    status: "Rejected",
  },
  {
    jobId: "234 555",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Anthony Rivera",
    jobType: "Export",
    status: "In Progress",
  },
  {
    jobId: "234 456",
    date: "5/02/2021",
    truckRego: "FS78KD",
    driver: "Shawn Martinez",
    jobType: "Export",
    status: "Complete",
  },
];

const customerDetailInvoiceData = [
  {
    invoiceId: "134890",
    date: "25/12/20",
    weight: "1,700 kg",
    pieces: "56",
    nett: "$5,056.30",
    tax: "$505.63",
    gross: "$5,561.93",
  },
  {
    invoiceId: "134890",
    date: "25/12/20",
    weight: "1,700 kg",
    pieces: "56",
    nett: "$5,056.30",
    tax: "$505.63",
    gross: "$5,561.93",
  },
  {
    invoiceId: "134890",
    date: "25/12/20",
    weight: "1,700 kg",
    pieces: "56",
    nett: "$5,056.30",
    tax: "$505.63",
    gross: "$5,561.93",
  },
  {
    invoiceId: "134890",
    date: "25/12/20",
    weight: "1,700 kg",
    pieces: "56",
    nett: "$5,056.30",
    tax: "$505.63",
    gross: "$5,561.93",
  },
];

const customerDetailCurrentActivityData = [
  {
    id: "JOB 342 335",
    kg: "4,000kg",
    pc: "19pc",
    dt: "24/12/20",
    nett: "$400.00",
    tax: "$40.00",
    gross: "$440.00",
    data: [
      {
        awb: "160-2345 7892",
        pieces: "4",
        weight: "1,707.00",
        notes: "-",
        charges: "170.70",
      },
      {
        awb: "160-2345 7892",
        pieces: "4",
        weight: "1,707.00",
        notes: "-",
        charges: "170.70",
      },
      {
        awb: "160-2345 7892",
        pieces: "4",
        weight: "1,707.00",
        notes: "-",
        charges: "170.70",
      },
    ],
  },
  {
    id: "JOB 342 336",
    kg: "4,000kg",
    pc: "19pc",
    dt: "24/12/20",
    nett: "$400.00",
    tax: "$40.00",
    gross: "$440.00",
    data: [
      {
        awb: "160-2345 7892",
        pieces: "4",
        weight: "1,707.00",
        notes: "-",
        charges: "170.70",
      },
      {
        awb: "160-2345 7892",
        pieces: "4",
        weight: "1,707.00",
        notes: "-",
        charges: "170.70",
      },
      {
        awb: "160-2345 7892",
        pieces: "4",
        weight: "1,707.00",
        notes: "-",
        charges: "170.70",
      },
    ],
  },
];

const driverListingData = [
  {
    driverName: "Anthony Rivera",
    empNumber: "244532",
    phone: "74574 745475",
    timeToday: "06:23",
    continiousTime: "07:23",
    status: "Active 23 min ago",
  },
  {
    driverName: "Anthony Rivera",
    empNumber: "244532",
    phone: "74574 745475",
    timeToday: "06:23",
    continiousTime: "03:23",
    status: "On Job 234 234",
  },
  {
    driverName: "Anthony Rivera",
    empNumber: "244532",
    phone: "74574 745475",
    timeToday: "06:23",
    continiousTime: "04:23",
    status: "Fueling",
  },
  {
    driverName: "Anthony Rivera",
    empNumber: "244532",
    phone: "74574 745475",
    timeToday: "06:23",
    continiousTime: "04:23",
    status: "On brake",
  },
  {
    driverName: "Anthony Rivera",
    empNumber: "244532",
    phone: "74574 745475",
    timeToday: "06:23",
    continiousTime: "04:23",
    status: "Active 1d ago",
  },
];

const driverDetailJobsData = [
  {
    jobId: "234 567",
    date: "5/02/2021",
    truckRego: "FS78KD",
    jobType: "Import",
    status: "Not Assigned",
  },
  {
    jobId: "234 567",
    date: "5/02/2021",
    truckRego: "FS78KD",
    jobType: "Export",
    status: "Rejected",
  },
  {
    jobId: "234 567",
    date: "5/02/2021",
    truckRego: "FS78KD",
    jobType: "Import",
    status: "In Progress",
  },
  {
    jobId: "234 567",
    date: "5/02/2021",
    truckRego: "FS78KD",
    jobType: "Export",
    status: "Complete",
  },
];

const driverDetailReportsData = [
  {
    date: "5/02/2021",
    jobs: [234567, 232007, 234430, 230321],
    timeWorked: "07:23",
  },
  {
    date: "5/02/2021",
    jobs: [234567, 230321],
    timeWorked: "07:23",
  },
  {
    date: "5/02/2021",
    jobs: [234567, 232007, 234430, 230321],
    timeWorked: "07:23",
  },
  {
    date: "5/02/2021",
    jobs: [234567, 232007, 234430],
    timeWorked: "07:23",
  },
  {
    date: "5/02/2021",
    jobs: [234567],
    timeWorked: "07:23",
  },
];
export {
  colors,
  routes,
  dashboardListing,
  dashboardListingHeader,
  customerListingHeader,
  customerDetailJobsHeader,
  customerDetailInvoiceHeader,
  driverListingHeader,
  addWayBillsData,
  consignMentData,
  runSheetData,
  customersData,
  customerDetailJobsData,
  customerDetailInvoiceData,
  customerDetailCurrentActivityData,
  driverListingData,
  driverDetailJobsData,
  driverDetailReportsData,
};
