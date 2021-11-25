import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "@utils/theme";
import { routes } from "@utils/constant";
import { headerTop } from "@utils/commonFunctions";

import PageNotFoundView from "@views/404";
import JobDetailView from "@views/job-detail";
import LoginView from "@views/login";
import JobListing from "@views/job-listing";
import DriverListing from "@views/driver-listing";
import DriverDetail from "@views/driver-detail";
import CustomerDetail from "@views/customer-detail";
import CustomerListing from "@views/customer-listing";
import Dashboard from "@views/dashboard";
import ForgotPassword from "@views/forgot-password";
import ResetPassword from "@views/reset-password";
import ProfileView from "@views/settings/account";
import NotificationView from "@views/settings/notifications";
import TrucksView from "@views/settings/trucks";
import TollLocation from "@views/settings/toll-location";
import PrivateRoute from "@utils/privateRoute";

const usePaddingUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    headerTop();
  }, [location]);
};

const UpdateWrapper = () => {
  usePaddingUpdater();
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path={routes.login} component={LoginView} />
      <Route exact path={routes.forgotPassword} component={ForgotPassword} />
      <Route exact path={routes.resetPassword} component={ResetPassword} />
      <PrivateRoute exact path={routes.driverListing} component={DriverListing} />
      <PrivateRoute exact path={routes.driverDetail} component={DriverDetail} />
      <PrivateRoute
        exact
        path={routes.customerDetail}
        component={CustomerDetail}
      />
      <PrivateRoute
        exact
        path={routes.customerListing}
        component={CustomerListing}
      />
      <PrivateRoute exact path={routes.myProfile} component={ProfileView} />
      <PrivateRoute
        exact
        path={routes.notifications}
        component={NotificationView}
      />
      <PrivateRoute exact path={routes.trucks} component={TrucksView} />
      <PrivateRoute exact path={routes.tollLocation} component={TollLocation} />
      <PrivateRoute exact path={routes.dashboard} component={Dashboard} />
      <PrivateRoute exact path={routes.jobListing} component={JobListing} />
      <PrivateRoute exact path={routes.jobDetail} component={JobDetailView} />
      <Route exact path={routes.pageNotFound} component={PageNotFoundView} />
      <Redirect to={routes.pageNotFound} />
    </Switch>
  );
};

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <UpdateWrapper />
      </Router>
    </ThemeProvider>
  );
};
export default Routes;
