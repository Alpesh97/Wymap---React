import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useFormik } from "formik";

import { AddCustomerStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import { materialCommonStyles } from "@utils/materialCommonStyles";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { useStore } from "@store/store";
import { ADD_CUSTOMER } from "@utils/actionTypes";

function AddCustomer() {
  const classes = AddCustomerStyle();
  const materilClasses = materialCommonStyles();
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
    initialValues: schema.addCustomerSchema,
    validationSchema: validationSchema.addCustomerValidationSchema,
    onSubmit: (value) => {
      dispatch({ type: ADD_CUSTOMER, payload: { value } });
      handleClose();
    },
  });

  return (
    <div className={classes.AddCustomerWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        underlinenone="true"
        onClick={handleClickOpen}
      >
        + Add Customer
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
          <DialogTitle id="alert-dialog-title">Add Customer</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="customer-name">
                    Customer Name
                  </label>
                  <TextField
                    id="customerName"
                    placeholder="DHL"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.customerName}
                    error={
                      formik.touched.customerName &&
                      Boolean(formik.errors.customerName)
                    }
                    helperText={
                      formik.touched.customerName && formik.errors.customerName
                    }
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Parent Account</label>
                  <Select
                    id="parentAccount"
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("parentAccount")}
                    value={formik.values.parentAccount}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""} disabled>
                      Choose
                    </MenuItem>
                    <MenuItem value={1}>Lorem</MenuItem>
                    <MenuItem value={2}>Lorem</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.parentAccount &&
                      formik.errors.parentAccount}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="location">
                    Location
                  </label>
                  <TextField
                    id="location"
                    placeholder="174 Andrews Rd, Penrith NSW 2750"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                    helperText={
                      formik.touched.location && formik.errors.location
                    }
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
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
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="phone">
                    Phone
                  </label>
                  <TextField
                    id="phone"
                    placeholder="0432 324 489, 0432 289 223"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Status</label>
                  <Select
                    id="status"
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("status")}
                    value={formik.values.status}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""} disabled>
                      Select status
                    </MenuItem>
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={2}>Loaded</MenuItem>
                    <MenuItem value={3}>Unload</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.status && formik.errors.status}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Invoicing Period</label>
                  <Select
                    id="period"
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("period")}
                    value={formik.values.period}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""} disabled>
                      Select Invoicing Period
                    </MenuItem>
                    <MenuItem value={1}>Weekly</MenuItem>
                    <MenuItem value={2}>Manual</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.period && formik.errors.period}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Job Type</label>
                  <Select
                    id="jobType"
                    displayEmpty
                    className={materilClasses.customSelect}
                    onChange={formik.handleChange("jobType")}
                    value={formik.values.jobType}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""} disabled>
                      Select jobType
                    </MenuItem>
                    <MenuItem value={1}>Import</MenuItem>
                    <MenuItem value={2}>Export</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.jobType && formik.errors.jobType}
                  </FormHelperText>
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
              Add customer
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddCustomer;
