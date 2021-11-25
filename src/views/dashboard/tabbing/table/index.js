import React from "react";
import { tableStyles } from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@material-ui/core";
import {
  dashboardRequestStatusColors,
  dashboardRequestbButtonStyle,
} from "@utils/commonFunctions";

function TableDisplay(props) {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {props.heading.map((item, index) => {
                  return (
                    <TableCell key={index} className={item.className}>
                      {item.title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="jobId">{row.jobId}</TableCell>
                  <TableCell className="customerName">{row.cName}</TableCell>
                  <TableCell className="fromTo">{row.fromTo}</TableCell>
                  <TableCell className="airWarBill">{row.airBill}</TableCell>
                  <TableCell className="date">{row.date}</TableCell>
                  <TableCell className="truck-rego">{row.truckRego}</TableCell>
                  <TableCell
                    className={`driver ${dashboardRequestbButtonStyle(
                      row.status
                    )}`}
                  >
                    <Button color="primary" className="primary-btn">
                      {row.driver}
                    </Button>
                  </TableCell>
                  <TableCell
                    className={`status ${dashboardRequestStatusColors(
                      row.status
                    )}`}
                  >
                    <span>{row.status}</span>
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
export default TableDisplay;
