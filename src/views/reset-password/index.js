import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import Footer from "@components/footer";
import { bannerStyle } from "@utils/commonStyles";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { routes } from "@utils/constant";
import Header from "@components/header";

export default function ResetPassword() {
  const history = useHistory();
  const [err] = useState(schema.resetPasswordSchema);
  const classes = bannerStyle();

  const formik = useFormik({
    initialValues: schema.resetPasswordSchema,
    validationSchema: validationSchema.resetPasswordValidationSchema,
    onSubmit: (val) => {
      history.push(routes.login);
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
                <Typography variant="h1">Reset Password</Typography>
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
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="********"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.password}
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
                <div className="form-row">
                  <div className="form-gourp">
                    <TextField
                      id="confirm-password"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      placeholder="********"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      error={
                        Boolean(err.confirmPassword) ||
                        (formik.touched.confirmPassword &&
                          Boolean(formik.errors.confirmPassword))
                      }
                      helperText={
                        err.confirmPassword !== ""
                          ? err.confirmPassword
                          : formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
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
                    Submit
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
