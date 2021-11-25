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
  customerDetailInvoiceData,
  customerDetailInvoiceHeader,
} from "@utils/constant";

function TableListing() {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {customerDetailInvoiceHeader.map((item, index) => {
                  return (
                    <TableCell key={index} className={item.className}>
                      {item.title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {customerDetailInvoiceData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="invoice">{item.invoiceId}</TableCell>
                  <TableCell className="date">{item.date}</TableCell>
                  <TableCell className="total-weight">{item.weight}</TableCell>
                  <TableCell className="total-pieces">{item.pieces}</TableCell>
                  <TableCell className="nett">{item.nett}</TableCell>
                  <TableCell className="tax">{item.tax}</TableCell>
                  <TableCell className="gross">{item.gross}</TableCell>
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
