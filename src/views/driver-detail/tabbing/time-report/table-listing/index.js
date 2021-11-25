import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

import { tableStyles } from "./style";
import { driverDetailReportsData } from "@utils/constant";

function TableListing() {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="date">Date</TableCell>
                <TableCell className="jobs">Jobs</TableCell>
                <TableCell className="total-time-worked">
                  Total Time Worked
                </TableCell>
                <TableCell className="download-report"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverDetailReportsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="date">{row.date}</TableCell>
                  <TableCell className="jobs">
                    {row.jobs.map((item) => `${item}, `)}
                  </TableCell>
                  <TableCell className="total-time-worked">
                    {row.timeWorked}{" "}
                  </TableCell>
                  <TableCell className="download-report">
                    <Button
                      className="blue-btn primary-btn"
                      color="inherit"
                      disableElevation
                      underlinenone="true"
                    >
                      Download report
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default TableListing;
