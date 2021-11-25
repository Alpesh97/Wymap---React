import React from "react";
import { timeReportStyle } from "./style";
import { Typography, Button } from "@material-ui/core";

import DownloadImage from "@assets/images/download.svg";
import TableListing from "./table-listing";

function TimeReport() {
  const classes = timeReportStyle();

  return (
    <div className={classes.timeReportWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className={classes.titleWrapper}>
          <Typography variant="h2">Run Sheet</Typography>
        </div>
        <div className={classes.buttonWrapper}>
          <div className="btn-inner-wrapper">
            <Button
              className="blue-btn primary-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
            >
              <img src={DownloadImage} alt="Download" />
              Download csv
            </Button>
            <Button
              className="blue-btn primary-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
            >
              <img src={DownloadImage} alt="Download" />
              Download pdf
            </Button>
          </div>
        </div>
      </div>
      <TableListing />
    </div>
  );
}
export default TimeReport;
