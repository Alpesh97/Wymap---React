import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "@utils/commonFunctions";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getToken() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
