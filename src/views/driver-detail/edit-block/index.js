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
            <p>Driver</p>
            <span>Shawn Martinez</span>
          </div>
          <div className="link-block">
            <Link title="Edit" to="/">
              <em>
                <img src={editIcon} alt="Edit" />
              </em>
              Edit driver
            </Link>
          </div>
        </div>
        <div className="edit-block-list">
          <ul>
            <li>
              <Typography variant="h6">Employee No</Typography>
              <div className="value-block">
                <p>246870</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Contact phone</Typography>
              <div className="value-block">
                <p>0432 039 233</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Working time today</Typography>
              <div className="value-block">
                <p>05:23</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Email</Typography>
              <div className="value-block">
                <p>email@mail.com</p>
              </div>
            </li>
            <li>
              <Typography variant="h6">Status</Typography>
              <div className="value-block">
                <p className="active">
                  On job <Link to="/">234 234</Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default EditBlock;
