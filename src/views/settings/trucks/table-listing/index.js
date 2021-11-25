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
import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const data = [
  {
    truck: "Ford 1833 DC",
    regoNumber: "AG98DL",
    dedicated: "Yes",
    edit: "edit",
    delete: "delete",
  },
  {
    truck: "Ford 3233s HR",
    regoNumber: "RD84LD",
    dedicated: "",
    edit: "edit",
    delete: "delete",
  },
  {
    truck: "Volvo FH16",
    regoNumber: "LF22RD",
    dedicated: "Yes",
    edit: "edit",
    delete: "delete",
  },
  {
    truck: "Ford 2533 LR Lowliner",
    regoNumber: "KF23LP",
    dedicated: "Yes",
    edit: "edit",
    delete: "delete",
  },
  {
    truck: "Ford 1833 DC",
    regoNumber: "PL27HD",
    dedicated: "",
    edit: "edit",
    delete: "delete",
  },
  {
    truck: "Volvo FH",
    regoNumber: "RD84LD",
    dedicated: "",
    edit: "edit",
    delete: "delete",
  },
  {
    truck: "Ford 1833 DC",
    regoNumber: "US44PS",
    dedicated: "",
    edit: "edit",
    delete: "delete",
  },
];

function TruckTable() {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table
            className="account-data-table"
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell className="truck">Truck</TableCell>
                <TableCell className="rego-number">Rego Number</TableCell>
                <TableCell className="dedicated">Dedicated</TableCell>
                <TableCell className="edit-link"></TableCell>
                <TableCell className="delete-link"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="truck">{item.truck}</TableCell>
                  <TableCell className="rego-number">
                    {item.regoNumber}
                  </TableCell>
                  <TableCell className="dedicated">{item.dedicated}</TableCell>
                  <TableCell className="edit-link">
                    <Link to="/">{item.edit}</Link>
                  </TableCell>
                  <TableCell className="delete-link">
                    <Link to="/">{item.delete}</Link>
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
export default TruckTable;
