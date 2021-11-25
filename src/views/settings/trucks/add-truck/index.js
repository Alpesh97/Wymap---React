import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { AddTruckStyle } from "./style";
import closeIcon from "@assets/images/close.svg";

export default function AddTruck() {
  const classes = AddTruckStyle();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [scroll] = React.useState("body");

  return (
    <div className={classes.AddTruckWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        onClick={handleClickOpen}
      >
        + Add Truck
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
        <DialogTitle id="alert-dialog-title">Add Truck</DialogTitle>
        <DialogContent>
          <form
            noValidate
            autoComplete="off"
            className={classes.customForm}
          ></form>
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
            Add Truck
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
