import React from "react";
import { TextField } from "@material-ui/core";

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
              placeholder="Search jobs"
              variant="outlined"
              type="search"
              InputProps={{
                endAdornment: <img src={SearchIcon} alt="Search" />,
              }}
            />
          </div>
        </div>
      </div>
      <TableListing />
    </div>
  );
}
export default Jobs;
