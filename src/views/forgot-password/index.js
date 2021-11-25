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

export default function ForgotPassword() {
  const history = useHistory();
  const [err] = useState(schema.forgotPasswordSchema);
  const classes = bannerStyle();

  const formik = useFormik({
    initialValues: schema.forgotPasswordSchema,
    validationSchema: validationSchema.forgotPasswordValidationSchema,
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
                <Typography variant="h1">Forgot Password</Typography>
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
