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

import { AddConsignmentStyle } from "./style";
import closeIcon from "@assets/images/close.svg";
import UploadImage from "@assets/images/upload.svg";
import { schema } from "@utils/schemas";
import validationSchema from "@utils/validationSchemas";
import { useStore } from "@store/store";
import { ADD_CONSIGNMENT } from "@utils/actionTypes";

function AddConsignment() {
  const classes = AddConsignmentStyle();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState({});
  const [scroll] = useState("body");
  const [, dispatch] = useStore();

  const handleUpload = (event) => {
    let reader = new FileReader();
    reader.onload = function () {
      setAvatar(reader.result);
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      document.getElementById("file-name").innerHTML =
        event?.target?.files[0]?.name;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: schema.addConsignMentSchema,
    validationSchema: validationSchema.addConsignmentValidationSchema,
    onSubmit: (value) => {
      dispatch({
        type: ADD_CONSIGNMENT,
        payload: { consignmentNo: value, photo: avatar },
      });
      handleClose();
    },
  });

  return (
    <div className={classes.AddConsignmentWrapper}>
      <Button
        className="orange-btn primary-btn"
        color="inherit"
        disableElevation
        underlinenone="true"
        onClick={handleClickOpen}
      >
        + Add consignment
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
          <DialogTitle>Add consignment</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="consignment-no">
                    Consignment No
                  </label>
                  <TextField
                    id="consignmentNo"
                    placeholder="8324 4242 KF"
                    variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.consignmentNo}
                    error={
                      formik.touched.consignmentNo &&
                      Boolean(formik.errors.consignmentNo)
                    }
                    helperText={
                      formik.touched.consignmentNo &&
                      formik.errors.consignmentNo
                    }
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl variant="outlined" className={classes.formControl}>
                  <label className="label-text" htmlFor="photo">
                    Photo
                  </label>
                  <div className={classes.fileInput}>
                    <TextField
                      id="photo"
                      variant="outlined"
                      type="file"
                      multiple
                      onChange={handleUpload}
                      accept="image/*"
                    />
                    <div className="label-block">
                      <img src={UploadImage} alt="Upload" />
                      <span className="file-name" id="file-name">
                        Upload photo
                      </span>
                    </div>
                  </div>
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
              Add to the job
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddConsignment;
