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
  TableFooter,
} from "@material-ui/core";

import { runSheetData } from "@utils/constant";

function TableListing() {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="status">Status</TableCell>
                <TableCell className="time">Time</TableCell>
                <TableCell className="location">Location</TableCell>
                <TableCell className="duration">Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {runSheetData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="status">{item.status}</TableCell>
                  <TableCell className="time">{item.time}</TableCell>
                  <TableCell className="location">{item.location}</TableCell>
                  <TableCell className="duration">{item.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan="3">Total time:</TableCell>
                <TableCell className="total-time">02:57</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default TableListing;
