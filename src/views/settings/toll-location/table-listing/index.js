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

const data = [
  {
    details: "Lorem ipsum doller Lorem ipsum doller",
    latitude: "27.2046° N",
    longitude: "77.4977° E",
    cost: "16.42",
  },
  {
    details: "Lorem ipsum doller Lorem ipsum doller",
    latitude: "27.2046° N",
    longitude: "77.4977° E",
    cost: "16.42",
  },
  {
    details: "Lorem ipsum doller Lorem ipsum doller",
    latitude: "27.2046° N",
    longitude: "77.4977° E",
    cost: "16.42",
  },
  {
    details: "Lorem ipsum doller Lorem ipsum doller",
    latitude: "27.2046° N",
    longitude: "77.4977° E",
    cost: "16.42",
  },
  {
    details: "Lorem ipsum doller Lorem ipsum doller",
    latitude: "27.2046° N",
    longitude: "77.4977° E",
    cost: "16.42",
  },
  {
    details: "Lorem ipsum doller Lorem ipsum doller",
    latitude: "27.2046° N",
    longitude: "77.4977° E",
    cost: "16.42",
  },
];

function TableListing() {
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
                <TableCell className="details">Details</TableCell>
                <TableCell className="latitude">Latitude</TableCell>
                <TableCell className="longitude">Longitude</TableCell>
                <TableCell className="cost">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="details">{item.details}</TableCell>
                  <TableCell className="latitude">{item.latitude}</TableCell>
                  <TableCell className="longitude">{item.longitude}</TableCell>
                  <TableCell className="cost">{item.cost}</TableCell>
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
