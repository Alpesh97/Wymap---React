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

import { AddNewItemStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { useStore } from "@store/store";
import { ADD_CONSIGNMENT_ITEM } from "@utils/actionTypes";
import { allowOnlyNumbers } from "@utils/commonFunctions";

function AddNewItem() {
  const classes = AddNewItemStyle();
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
    initialValues: schema.addConsignMentItemSchema,
    validationSchema: validationSchema.addConsignmentItemValidationSchema,
    onSubmit: (value) => {
      dispatch({
        type: ADD_CONSIGNMENT_ITEM,
        payload: { value },
      });
      handleClose();
    },
  });

  return (
    <div className={classes.AddNewItemWrapper}>
      <Button
        className="blue-btn primary-btn"
        color="inherit"
        disableElevation
        underlinenone="true"
        onClick={handleClickOpen}
      >
        + Add new item
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
          <DialogTitle>Add new item</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="item-no">
                    Item No
                  </label>
                  <TextField
                    id="itemNo"
                    placeholder="P-4523"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.itemNo}
                    error={
                      formik.touched.itemNo && Boolean(formik.errors.itemNo)
                    }
                    helperText={formik.touched.itemNo && formik.errors.itemNo}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="weight">
                    Weight
                  </label>
                  <TextField
                    id="weight"
                    placeholder="200"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    onKeyPress={allowOnlyNumbers}
                    value={formik.values.weight}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                  />
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="additional-info">
                    Additional info
                  </label>
                  <TextField
                    id="addInfo"
                    placeholder="Width, length"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.addInfo}
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
              Add item
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
export default AddNewItem;
