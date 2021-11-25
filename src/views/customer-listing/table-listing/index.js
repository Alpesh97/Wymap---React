import React, { useState } from "react";
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

import Pagination from "@components/pagination";
import { customerListingHeader, customersData } from "@utils/constant";
import { tableStyles } from "./style";

function TableListing() {
  const classes = tableStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {customerListingHeader.map((item, index) => {
                  return (
                    <TableCell key={index} className={item.className}>
                      {item.title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {customersData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="customer">{item.customer}</TableCell>
                  <TableCell className="address">{item.address}</TableCell>
                  <TableCell className="email">{item.email}</TableCell>
                  <TableCell className="phone">{item.phone}</TableCell>
                  <TableCell
                    className={`last-activity ${
                      item.lastActivity === "Confirm Invoice"
                        ? "confirm-invoice"
                        : "disabled"
                    }`}
                  >
                    <Button color="primary" className="primary-btn">
                      {item.lastActivity}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="pagination-wrapper">
          <Pagination
            page={page}
            handleChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
}
export default TableListing;
