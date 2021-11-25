import React from "react";
import { TextField, Button } from "@material-ui/core";

import { JobsStyle } from "./style";
import SearchIcon from "@assets/images/search.svg";
import TableListing from "./table-listing";

function Jobs() {
  const classes = JobsStyle();

  return (
    <div className={classes.JobsWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className={classes.searchWrapper}>
          <div className="form-gourp">
            <TextField
              placeholder="Search invoices"
              variant="outlined"
              type="search"
              InputProps={{
                endAdornment: <img src={SearchIcon} alt="Search" />,
              }}
            />
          </div>
        </div>
        <div className={classes.modalWrapper}>
          <Button
            className="orange-btn primary-btn"
            color="inherit"
            disableElevation
            underlinenone="true"
          >
            Assign a job
          </Button>
        </div>
      </div>
      <TableListing />
    </div>
  );
}

export default Jobs;
