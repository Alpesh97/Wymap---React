import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { tableStyles } from "./style";
import {
  customerDetailJobsData,
  customerDetailJobsHeader,
} from "@utils/constant";
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
                {customerDetailJobsHeader.map((item, index) => {
                  return (
                    <TableCell key={index} className={item.className}>
                      {item.title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {customerDetailJobsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="jobId">{item.jobId}</TableCell>
                  <TableCell className="date">{item.date}</TableCell>
                  <TableCell className="truck-rego">{item.truckRego}</TableCell>
                  <TableCell className="driver">{item.driver}</TableCell>
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
