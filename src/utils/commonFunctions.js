const headerTop = () => {
  var wrapper = document.querySelector(".wrapper");
  if (wrapper !== null) {
    var header_h = document.getElementById("header").offsetHeight;
    wrapper.style.paddingTop = header_h + "px";
  }
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};

const removeToken = () => {
  return localStorage.removeItem("token");
};

const allowOnlyNumbers = (event) => {
  if (event.key.length === 1 && /\D/.test(event.key)) {
    event.preventDefault();
  }
};

const dashboardRequestStatusColors = (data) => {
  var color;
  switch (data) {
    case "Not Assigned":
      color = "not-assigned";
      break;
    case "Complete":
      color = "completed";
      break;
    case "Rejected":
      color = "rejected";
      break;
    case "In Progress":
      color = "in-progress";
      break;

    default:
      color = "#e40000";
      break;
  }
  return color;
};

const dashboardRequestbButtonStyle = (data) => {
  var button;
  switch (data) {
    case "Not Assigned":
      button = "re-assign";
      break;
    case "Complete":
      button = "assign-driver";
      break;
    case "Rejected":
      button = "assign-driver";
      break;
    case "In Progress":
      button = "re-assign";
      break;

    default:
      button = "#e40000";
      break;
  }
  return button;
};

export {
  headerTop,
  setToken,
  getToken,
  removeToken,
  dashboardRequestStatusColors,
  dashboardRequestbButtonStyle,
  allowOnlyNumbers,
};
