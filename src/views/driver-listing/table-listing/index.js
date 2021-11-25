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
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Link } from "react-router-dom";

import { tableStyles } from "./style";
import { driverListingData, driverListingHeader } from "@utils/constant";

function TableListing() {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {driverListingHeader.map((item, index) => {
                  return (
                    <TableCell key={index} className={item.className}>
                      {item.title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {driverListingData.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="driverName">
                      {item.driverName}
                    </TableCell>
                    <TableCell className="employeeNumber">
                      {item.empNumber}
                    </TableCell>
                    <TableCell className="contact">{item.phone}</TableCell>
                    <TableCell className="workingTimeToday">
                      {item.timeToday}
                    </TableCell>
                    <TableCell className="continiousWorkingTime maxTime">
                      <span>
                        <ErrorOutlineIcon />
                        {item.continiousTime}
                      </span>
                    </TableCell>
                    <TableCell
                      className={`status ${
                        item.status.includes("Active") ? "last-active" : ""
                      }`}
                    >
                      {item.status}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell className="driverName">Anthony Rivera</TableCell>
                <TableCell className="employeeNumber">244254</TableCell>
                <TableCell className="contact">0433 892 230</TableCell>
                <TableCell className="workingTimeToday">06:23</TableCell>
                <TableCell className="continiousWorkingTime">
                  <span>03:23</span>
                </TableCell>
                <TableCell className="status active">
                  On Job <Link to="/">234 234</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default TableListing;
