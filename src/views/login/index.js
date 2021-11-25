import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import Footer from "@components/footer";
import { bannerStyle } from "@utils/commonStyles";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { routes } from "@utils/constant";
import { LOGIN } from "@utils/actionTypes";
import { useStore } from "@store/store";
import Header from "@components/header";
import { setToken } from "@utils/commonFunctions";

export default function LoginView() {
  const history = useHistory();
  const [err] = useState(schema.loginSchema);
  const classes = bannerStyle();
  const [, dispatch] = useStore();

  const formik = useFormik({
    initialValues: schema.loginSchema,
    validationSchema: validationSchema.loginValidationSchema,
    onSubmit: () => {
      dispatch({ type: LOGIN, payload: { isLoggedIn: true } });
      setToken(true);
      history.push(routes.dashboard);
    },
  });

  return (
    <>
      <Header />
      <div className={classes.commonBannerWrapper}>
        <div className="commonBanner">
          <div className="white-box-wrapper">
            <div className="white-box">
              <div className="title-wrapper">
                <Typography variant="h1">Admin Login</Typography>
              </div>
              <form
                noValidate
                autoComplete="off"
                className="custom-form"
                onSubmit={formik.handleSubmit}
              >
                <div className="form-row">
                  <div className="form-gourp">
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="archie@wymap.com.au"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={
                        Boolean(err.email) ||
                        (formik.touched.email && Boolean(formik.errors.email))
                      }
                      helperText={
                        err.email !== ""
                          ? err.email
                          : formik.touched.email && formik.errors.email
                      }
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-gourp">
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="**********"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      autoComplete="on"
                      error={
                        Boolean(err.password) ||
                        (formik.touched.password &&
                          Boolean(formik.errors.password))
                      }
                      helperText={
                        err.password !== ""
                          ? err.password
                          : formik.touched.password && formik.errors.password
                      }
                    />
                  </div>
                </div>
                <div className="form-row btn-wrapper">
                  <Button
                    type="submit"
                    className="orange-btn primary-btn"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
