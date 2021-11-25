import React from "react";
import { TimeReportStyle } from "./style";
import { TextField } from "@material-ui/core";
import SearchIcon from "@assets/images/search.svg";
import TableListing from "./table-listing";

export default function TimeReport() {
  const classes = TimeReportStyle();

  return (
    <div className={classes.TimeReportWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className={classes.searchWrapper}>
          <div className="form-gourp">
            <TextField
              placeholder="Search TimeReports"
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
