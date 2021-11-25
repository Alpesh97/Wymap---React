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
  TextareaAutosize,
  FormHelperText,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useFormik } from "formik";

import { CreateJobStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import { materialCommonStyles } from "@utils/materialCommonStyles";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { CREATE_JOB } from "@utils/actionTypes";
import { useStore } from "@store/store";
import { allowOnlyNumbers } from "@utils/commonFunctions";

function CreateJob() {
  const classes = CreateJobStyle();
  const materilClasses = materialCommonStyles();
  const [scroll] = useState("body");
  const [open, setOpen] = useState(false);
  const [, dispatch] = useStore();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: schema.createJobSchema,
    validationSchema: validationSchema.createJobValidationSchema,
    onSubmit: (value) => {
      dispatch({ type: CREATE_JOB, payload: { value } });
      handleClose();
    },
  });
  return (
    <div className={classes.CreateJobWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        onClick={handleClickOpen}
      >
        + CREATE JOB
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
        <DialogTitle id="alert-dialog-title">Create Job</DialogTitle>
        <form
          noValidate
          autoComplete="off"
          className={classes.customForm}
          onSubmit={formik.handleSubmit}
        >
          <DialogContent>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Customer</label>
                  <Select
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("customer")}
                    value={formik.values.customer}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""}>Select customer</MenuItem>
                    <MenuItem value={0}>DHL</MenuItem>
                    <MenuItem value={1}>Deliby Giver</MenuItem>
                    <MenuItem value={2}>Gilbert Johnathon</MenuItem>
                    <MenuItem value={3}>X-Import Pty Ltd Copy</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.customer && formik.errors.customer}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Job Type</label>
                  <Select
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("jobType")}
                    value={formik.values.jobType}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""}>Select Job Type</MenuItem>
                    <MenuItem value={1}>Import</MenuItem>
                    <MenuItem value={2}>Export</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.jobType && formik.errors.jobType}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Cargo Type</label>
                  <Select
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("cargoType")}
                    value={formik.values.cargoType}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""}>Select Cargo Type</MenuItem>
                    <MenuItem value={1}>Unit</MenuItem>
                    <MenuItem value={2}>Lorem</MenuItem>
                    <MenuItem value={3}>Ipsum</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.cargoType && formik.errors.cargoType}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Assign Driver</label>
                  <Select
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    onChange={formik.handleChange("assignDriver")}
                    value={formik.values.assignDriver}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""}>Select driver</MenuItem>
                    <MenuItem value={1}>Archie Parker</MenuItem>
                    <MenuItem value={2}>Lorem</MenuItem>
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.assignDriver && formik.errors.assignDriver}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="weight">
                    Total weight (kg)
                  </label>
                  <TextField
                    id="weight"
                    placeholder="1000"
                    variant="outlined"
                    type="text"
                    onKeyPress={allowOnlyNumbers}
                    onChange={formik.handleChange("weight")}
                    value={formik.values.weight}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="pieces">
                    Pieces
                  </label>
                  <TextField
                    id="pieces"
                    placeholder="50"
                    variant="outlined"
                    type="text"
                    onKeyPress={allowOnlyNumbers}
                    onChange={formik.handleChange("pieces")}
                    value={formik.values.pieces}
                    error={
                      formik.touched.pieces && Boolean(formik.errors.pieces)
                    }
                    helperText={formik.touched.pieces && formik.errors.pieces}
                  />
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="pick-up-location">
                    Pick up location
                  </label>
                  <TextField
                    id="pick-up-location"
                    placeholder="174 Andrews Rd, Penrith NSW 2750"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange("pickLocation")}
                    value={formik.values.pickLocation}
                    error={
                      formik.touched.pickLocation &&
                      Boolean(formik.errors.pickLocation)
                    }
                    helperText={
                      formik.touched.pickLocation && formik.errors.pickLocation
                    }
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="drop-location">
                    Drop off location
                  </label>
                  <TextField
                    id="drop-location"
                    placeholder="3 Shropshire St, Miller NSW 2168"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange("dropLocation")}
                    value={formik.values.dropLocation}
                    error={
                      formik.touched.dropLocation &&
                      Boolean(formik.errors.dropLocation)
                    }
                    helperText={
                      formik.touched.dropLocation && formik.errors.dropLocation
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp full-width">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="description">
                    Job description
                  </label>
                  <TextareaAutosize
                    rowsMax={3}
                    id="description"
                    aria-label="description"
                    placeholder="Please do not collect any ULD under this AWB. We will advise when they are ready to be picked up. Also, they are dangerous goods. Please ensure to follow the instruction on the Cargo."
                    onChange={formik.handleChange("jobDesc")}
                    value={formik.values.jobDesc}
                  />
                  <FormHelperText className="error-text">
                    {formik.touched.jobDesc && formik.errors.jobDesc}
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
              onClick={handleClose}
            >
              CANCEL
            </Button>
            <Button
              className="orange-btn primary-btn"
              color="inherit"
              disableElevation
              type="submit"
            >
              CREATE
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default CreateJob;
