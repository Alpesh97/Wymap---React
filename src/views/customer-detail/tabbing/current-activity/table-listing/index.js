import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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

function TableListing(props) {
  const classes = tableStyles();

  return (
    <>
      <div className={classes.tableWrapper}>
        <TableContainer component={Paper} className={classes.customTable}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="AWB">AWB</TableCell>
                <TableCell className="pieces">Pieces</TableCell>
                <TableCell className="weight">Weight</TableCell>
                <TableCell className="notes">Notes</TableCell>
                <TableCell className="charge">Charge</TableCell>
                <TableCell className="more"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="AWB">{item.awb}</TableCell>
                  <TableCell className="pieces">{item.pieces}</TableCell>
                  <TableCell className="weight">{item.weight}</TableCell>
                  <TableCell className="notes">{item.notes}</TableCell>
                  <TableCell className="charge">{item.charges}</TableCell>
                  <TableCell className="mare">
                    <div className={classes.moreLinkWrapper}>
                      <div className="more-link-block">
                        <span className="more-link">
                          <MoreVertIcon />
                        </span>
                      </div>
                    </div>
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
