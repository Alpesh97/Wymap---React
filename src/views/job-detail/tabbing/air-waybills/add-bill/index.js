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

import { AddAirWayBillStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import { allowOnlyNumbers } from "@utils/commonFunctions";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { useStore } from "@store/store";
import { ADD_AWB } from "@utils/actionTypes";

function AddAirWayBill() {
  const classes = AddAirWayBillStyle();
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
    initialValues: schema.addAirWayBillSchema,
    validationSchema: validationSchema.addAirWayBillValidationSchema,
    onSubmit: (value) => {
      dispatch({ type: ADD_AWB, payload: { value } });
      handleClose();
    },
  });

  return (
    <div className={classes.AddAirWayBillWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        underlinenone="true"
        onClick={handleClickOpen}
      >
        + Add air waybill
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
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
          <DialogTitle>Add air waybill</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="bill-number">
                    Air waybill number
                  </label>
                  <TextField
                    id="awbNumber"
                    placeholder="248-2345 5002"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.awbNumber}
                    error={
                      formik.touched.awbNumber &&
                      Boolean(formik.errors.awbNumber)
                    }
                    helperText={
                      formik.touched.awbNumber && formik.errors.awbNumber
                    }
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="flight">
                    Flight
                  </label>
                  <TextField
                    id="flight"
                    placeholder="SQ 0231 25 May, 10:09 (A)"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.flight}
                    error={
                      formik.touched.flight && Boolean(formik.errors.flight)
                    }
                    helperText={formik.touched.flight && formik.errors.flight}
                  />
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="carrier">
                    Carrier
                  </label>
                  <TextField
                    id="carrier"
                    placeholder="Emirates"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.carrier}
                    error={
                      formik.touched.carrier && Boolean(formik.errors.carrier)
                    }
                    helperText={formik.touched.carrier && formik.errors.carrier}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <div className="inner-row">
                  <div className="inner-form-group">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <label className="label-text" htmlFor="weight">
                        Total weight (kg)
                      </label>
                      <TextField
                        id="weight"
                        placeholder="1000"
                        variant="outlined"
                        type="text"
                        onKeyPress={allowOnlyNumbers}
                        onChange={formik.handleChange}
                        value={formik.values.weight}
                        error={
                          formik.touched.weight && Boolean(formik.errors.weight)
                        }
                        helperText={
                          formik.touched.weight && formik.errors.weight
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="inner-form-group">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <label className="label-text" htmlFor="pieces">
                        Pieces
                      </label>
                      <TextField
                        id="pieces"
                        placeholder="50"
                        variant="outlined"
                        type="text"
                        onKeyPress={allowOnlyNumbers}
                        onChange={formik.handleChange}
                        value={formik.values.pieces}
                        error={
                          formik.touched.pieces && Boolean(formik.errors.pieces)
                        }
                        helperText={
                          formik.touched.pieces && formik.errors.pieces
                        }
                      />
                    </FormControl>
                  </div>
                </div>
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
              Add to the job
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddAirWayBill;
