import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";

import { AddDriverStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { allowOnlyNumbers } from "@utils/commonFunctions";
import { ADD_DRIVER } from "@utils/actionTypes";
import { useStore } from "@store/store";

function AddDriver() {
  const classes = AddDriverStyle();
  const [open, setOpen] = useState(false);
  const [scroll] = useState("body");
  const [, dispatch] = useStore();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: schema.addDriverSchema,
    validationSchema: validationSchema.addDriverValidationSchema,
    onSubmit: (value) => {
      dispatch({ type: ADD_DRIVER, payload: { value } });
      handleClose();
    },
  });

  return (
    <div className={classes.AddDriverWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        underlinenone="true"
        onClick={handleClickOpen}
      >
        + Add Driver
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.customModal}
        scroll={scroll}
      >
        <div className="close-modal">
          <img src={closeIcon} alt="Close" onClick={handleClose} />
        </div>
        <form
          noValidate
          autoComplete="off"
          className={classes.customForm}
          onSubmit={formik.handleSubmit}
        >
          <DialogTitle id="alert-dialog-title">Add Driver</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="fullname">
                    Full name
                  </label>
                  <TextField
                    id="fullName"
                    placeholder="Philip Jackson"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="phone">
                    Contact phone
                  </label>
                  <TextField
                    id="phone"
                    placeholder="0432 039 233"
                    variant="outlined"
                    type="text"
                    onKeyPress={allowOnlyNumbers}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp full-width">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="email">
                    Email
                  </label>
                  <TextField
                    id="email"
                    placeholder="email@mail.com"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </FormControl>
              </div>
            </div>
          </DialogContent>
          <DialogActions className="bottom-button-block">
            <Button
              className="primary-btn gray-border-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
              onClick={handleClose}
            >
              CANCEL
            </Button>
            <Button
              className="orange-btn primary-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
              type="submit"
            >
              Add Driver
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddDriver;
