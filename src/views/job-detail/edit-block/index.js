import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { EditBlockStyle } from "./style";
import editIcon from "@assets/images/edit.svg";

function EditBlock() {
  const classes = EditBlockStyle();

  return (
    <div className={classes.EditBlockWrapper}>
      <div className="white-card edit-block">
        <div className="edit-block-header">
          <div className="inner-heading">
            <p>Job Number</p>
            <span>234 234</span>
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
        <div className="edit-block-content">
          <Typography variant="h6">Child accounts:</Typography>
          <p>
            Pick up 2 units from DHL Company at 232 Street and send to Sydney
            International terminal D-2, all the air waybills arleady added here
            by the s.. more
          </p>
        </div>
        <div className="edit-block-list">
          <ul>
            <li>
              <Typography variant="h6">Customer</Typography>
              <div className="value-block">
                <Link to="/" title="DHL">
                  DHL
                </Link>
              </div>
            </li>
            <li>
              <Typography variant="h6">Job type</Typography>
              <div className="value-block">
                <p>Export</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Pick up</Typography>
              <div className="value-block">
                <p>Sydney international terminal</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Drop off</Typography>
              <div className="value-block">
                <p>23 Street, Cityname, NSW 2324</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Driver</Typography>
              <div className="value-block">
                <Link to="/" title="Shawn Martinez">
                  Shawn Martinez
                </Link>
              </div>
            </li>
            <li>
              <Typography variant="h6">Status</Typography>
              <div className="value-block">
                <p>Complete</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Duration</Typography>
              <div className="value-block">
                <p>3 hr 32 min</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Time sheet</Typography>
              <div className="value-block">
                <Link to="/" title="Download">
                  Download
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default EditBlock;
