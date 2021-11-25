import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { EditBlockStyle } from "./style";
import editIcon from "@assets/images/edit.svg";

function EditBlock() {
  const classes = EditBlockStyle();

  return (
    <div className={classes.EditBlockWrapper}>
      <div className="white-card edit-block">
        <div className="edit-block-header">
          <div className="inner-heading">
            <p>Customer</p>
            <span>DHL</span>
          </div>
          <div className="link-block">
            <Link title="Edit" to="/">
              <em>
                <img src={editIcon} alt="Edit" />
              </em>
              Edit
            </Link>
          </div>
        </div>
        <div className="edit-block-list">
          <ul>
            <li>
              <Typography variant="h6">Address</Typography>
              <div className="value-block">
                <p>23 Street, Cityname, NSW 2324</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Status</Typography>
              <div className="value-block">
                <p>Active</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Phone</Typography>
              <div className="value-block">
                <p>0432 324 489, 0432 289 223</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Email</Typography>
              <div className="value-block">
                <p>dhl@mail.com, dhlsupport@mail.com</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Invoicing period</Typography>
              <div className="value-block">
                <p>Manual</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="edit-block-content">
          <Typography variant="h6">Child accounts:</Typography>
          <Link to="/">DHL Export Pty Ltd </Link>
          <Link to="/">DHL Import Queensland Pty Ltd</Link>
        </div>
      </div>
    </div>
  );
}

export default EditBlock;
