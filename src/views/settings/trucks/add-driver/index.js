import React from "react";
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
} from "@material-ui/core";
import { AddDriverStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import { ExpandMore } from "@material-ui/icons";
import { materialCommonStyles } from "@utils/materialCommonStyles";

export default function AddDriver() {
  // for ParentAccount select
  const [parentAccount, setParentAccount] = React.useState("");
  const handleParentAccountChange = (event) => {
    setParentAccount(event.target.value);
  };

  // for Invoicing Period
  const [invoicingPeriod, setInvoicingPeriod] = React.useState(0);
  const handleInvoicingPeriodChange = (event) => {
    setInvoicingPeriod(event.target.value);
  };

  // for Job Type
  const [jobType, setJobType] = React.useState(0);
  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };
  // for status
  const [status, setStatus] = React.useState(0);
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const classes = AddDriverStyle();
  const materilClasses = materialCommonStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [scroll] = React.useState("body");

  return (
    <div className={classes.AddDriverWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
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
        <DialogTitle id="alert-dialog-title">Add Customer</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" className={classes.customForm}>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="customer-name">
                    Customer Name
                  </label>
                  <TextField
                    id="customer-name"
                    placeholder="DHL"
                    variant="outlined"
                    type="text"
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Parent Account</label>
                  <Select
                    value={parentAccount}
                    onChange={handleParentAccountChange}
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={""}>Choose</MenuItem>
                    <MenuItem value={0}>Lorem</MenuItem>
                    <MenuItem value={1}>Lorem</MenuItem>
                  </Select>
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
                  />
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Status</label>
                  <Select
                    value={status}
                    onChange={handleStatusChange}
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={0}>Active</MenuItem>
                    <MenuItem value={1}>Lorem</MenuItem>
                    <MenuItem value={2}>Lorem</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="form-row">
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Invoicing Period</label>
                  <Select
                    value={invoicingPeriod}
                    onChange={handleInvoicingPeriodChange}
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={0}>Weekly</MenuItem>
                    <MenuItem value={1}>Manual</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="form-gourp">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text">Job Type</label>
                  <Select
                    value={jobType}
                    onChange={handleJobTypeChange}
                    displayEmpty
                    className={materilClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materilClasses.customSelect },
                    }}
                    IconComponent={() => <ExpandMore />}
                  >
                    <MenuItem value={0}>Export</MenuItem>
                    <MenuItem value={1}>Import</MenuItem>
                    <MenuItem value={2}>Lorem</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions className="bottom-button-block">
          <Button
            className="primary-btn gray-border-btn"
            color="inherit"
            disableElevation
          >
            CANCEL
          </Button>
          <Button
            className="orange-btn primary-btn"
            color="inherit"
            disableElevation
          >
            Add customer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
