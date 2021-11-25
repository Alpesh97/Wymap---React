import React, { useState } from "react";
import { DriverListingStyle } from "./style";
import Header from "@components/header";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import SearchIcon from "@assets/images/search.svg";
import { materialCommonStyles } from "@utils/materialCommonStyles";
import UploadImage from "@assets/images/blue-upload.svg";
import AddCustomer from "./add-driver";
import TableListing from "./table-listing";

function DriverListing() {
  const classes = DriverListingStyle();
  const materilClasses = materialCommonStyles();
  const [status, setStatus] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  function uploadFile(event) {
    document.getElementById("file-name").innerHTML = event.target.files[0].name;
  }

  return (
    <>
      <Header />
      <div className={classes.DriverListingWrapper}>
        <div className="dashboard-page wrapper">
          <div className="inner-page">
            <div className={classes.innerPageTopBlock}>
              <div className="left-block">
                <Typography variant="h1">Drivers</Typography>
              </div>
              <div className="right-block">
                <div className="right-block-inner">
                  <div className="search-wrapper">
                    <div className="form-gourp">
                      <TextField
                        id="search-request"
                        placeholder="Search drivers"
                        variant="outlined"
                        type="search"
                        InputProps={{
                          endAdornment: <img src={SearchIcon} alt="Search" />,
                        }}
                      />
                    </div>
                  </div>
                  <div className="dropdown_wrapper">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
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
                        <MenuItem value={""}>Status</MenuItem>
                        <MenuItem value={1}>Not assigned</MenuItem>
                        <MenuItem value={2}>In progress</MenuItem>
                        <MenuItem value={3}>Completed</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="modal-wrapper">
                    <div className="btn-wrapper">
                      <div className={classes.fileInput}>
                        <TextField
                          id="photo"
                          variant="outlined"
                          type="file"
                          multiple
                          onChange={uploadFile}
                        />
                        <div className="label-block">
                          <img src={UploadImage} alt="Upload" />
                          <span className="file-name" id="file-name">
                            Import from csv
                          </span>
                        </div>
                      </div>
                      <AddCustomer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TableListing />
          </div>
        </div>
      </div>
    </>
  );
}
export default DriverListing;
