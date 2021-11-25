import React from "react";
import { tableStyles } from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { driverDetailJobsData } from "@utils/constant";
import { dashboardRequestStatusColors } from "@utils/commonFunctions";

function TableListing() {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="jobId">Job ID</TableCell>
                <TableCell className="date">Date</TableCell>
                <TableCell className="truck-rego">Truck Rego</TableCell>
                <TableCell className="jobType">Job Type</TableCell>
                <TableCell className="status">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverDetailJobsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="jobId">{item.jobId}</TableCell>
                  <TableCell className="date">{item.date}</TableCell>
                  <TableCell className="truck-rego">{item.truckRego}</TableCell>
                  <TableCell className="jobType">{item.jobType}</TableCell>
                  <TableCell
                    className={`status ${dashboardRequestStatusColors(
                      item.status
                    )}`}
                  >
                    <span>{item.status}</span>
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
