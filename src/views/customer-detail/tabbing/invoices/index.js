import React from "react";
import { TextField } from "@material-ui/core";

import { InvoiceStyle } from "./style";
import SearchIcon from "@assets/images/search.svg";
import TableListing from "./table-listing";

function Invoice() {
  const classes = InvoiceStyle();

  return (
    <div className={classes.InvoiceWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className={classes.searchWrapper}>
          <div className="form-gourp">
            <TextField
              placeholder="Search invoices"
              variant="outlined"
              type="search"
              InputProps={{
                endAdornment: <img src={SearchIcon} alt="Search" />,
              }}
            />
          </div>
        </div>
      </div>
      <TableListing />
    </div>
  );
}
export default Invoice;
