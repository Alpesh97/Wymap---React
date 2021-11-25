import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Checkbox,
  ListItemText,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useFormik } from "formik";

import { AddConsignmentStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import uncheckedIcon from "@assets/images/uncheck-icon.svg";
import checkedIcon from "@assets/images/checked-icon.svg";
import calendarIcon from "@assets/images/calendar-icon.svg";
import DownloadImage from "@assets/images/blue-download-icon.svg";
import { materialCommonStyles } from "@utils/materialCommonStyles";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { useStore } from "@store/store";
import { ISSUE_INVOICE } from "@utils/actionTypes";

export default function AddConsignment() {
  const classes = AddConsignmentStyle();
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
    initialValues: schema.issueInvoiceSchema,
    validationSchema: validationSchema.issueInvoiceValidationSchema,
    onSubmit: (value) => {
      dispatch({ type: ISSUE_INVOICE, payload: { value } });
      handleClose();
    },
  });
  const menuData = [
    {
      value: "email@mail.com",
      label: "email@mail.com",
    },
    {
      value: "email1@mail.com",
      label: "email1@mail.com",
    },
  ];
  return (
    <div className={classes.AddConsignmentWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        underlinenone="true"
        onClick={handleClickOpen}
      >
        Issue and send invoice
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
          <DialogTitle>Issue invoice</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Issue date</label>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      variant="inline"
                      format="dd MMM yyyy"
                      className="custom-datepicker"
                      keyboardIcon={<img src={calendarIcon} alt="calendar" />}
                      name="issueDate"
                      placeholder="24 Mar 2021"
                      value={formik.values.issueDate}
                      onChange={(value) =>
                        formik.setFieldValue("issueDate", value)
                      }
                      error={
                        formik.touched.issueDate &&
                        Boolean(formik.errors.issueDate)
                      }
                      helperText={
                        formik.touched.issueDate && formik.errors.issueDate
                      }
                    />
                  </MuiPickersUtilsProvider>
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Date payable</label>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      variant="inline"
                      format="dd MMM yyyy"
                      className="custom-datepicker"
                      keyboardIcon={<img src={calendarIcon} alt="calendar" />}
                      placeholder="24 Mar 2021"
                      value={formik.values.datePayable}
                      onChange={(value) =>
                        formik.setFieldValue("datePayable", value)
                      }
                      error={
                        formik.touched.datePayable &&
                        Boolean(formik.errors.datePayable)
                      }
                      helperText={
                        formik.touched.datePayable && formik.errors.datePayable
                      }
                    />
                  </MuiPickersUtilsProvider>
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    name="division"
                    displayEmpty
                    className={materilClasses.customSelect}
                    multiple
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <>Select Division</>;
                      }

                      return menuData
                        .filter((m) => selected.includes(m.value))
                        .map((m) => m.label)
                        .join(",");
                    }}
                    IconComponent={() => <ExpandMore />}
                    onChange={formik.handleChange}
                    value={formik.values.division}
                  >
                    <MenuItem value="" disabled>
                      Select Division
                    </MenuItem>
                    {menuData.map((item, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={item.value}
                          className="custom-checkbox custom-Multicheckbox"
                        >
                          <Checkbox
                            checked={
                              formik.values.division.indexOf(item.value) > -1
                            }
                            icon={<img src={uncheckedIcon} alt="CheckBox" />}
                            checkedIcon={
                              <img src={checkedIcon} alt="CheckBox" />
                            }
                          />
                          <ListItemText primary={item.label} />
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText className="error-text">
                    {formik.touched.division && formik.errors.division}
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
            >
              <img src={DownloadImage} alt="Download" />
              Download draft
            </Button>
            <Button
              className="orange-btn primary-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
              type="submit"
            >
              Issue and send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
