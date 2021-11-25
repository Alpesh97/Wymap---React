import React from "react";
import { Typography } from "@material-ui/core";

import { TimesheetStyle } from "./style";
import Map from "./map";

function Timesheet() {
  const classes = TimesheetStyle();

  return (
    <div className={classes.TimesheetWrapper}>
      <div className="map-wrapper">
        <Map />
      </div>
      <div className={classes.customCardWrapper}>
        <div className="custom-card">
          <div className="card-header">
            <span className="heading-title">
              DHL <em>Job 324 489</em>
            </span>
            <div className="total-time">
              <span>02:30</span>
            </div>
          </div>
          <div className="card-body">
            <ul>
              <li>
                <Typography variant="h6">Started:</Typography>
                <div className="value-block">
                  <p>09:02</p>
                </div>
              </li>
              <li>
                <Typography variant="h6">Arrived to pick up:</Typography>
                <div className="value-block">
                  <p>09:29</p>
                </div>
              </li>
              <li>
                <Typography variant="h6">Loaded:</Typography>
                <div className="value-block">
                  <p>10:23</p>
                </div>
              </li>
              <li>
                <Typography variant="h6">Break:</Typography>
                <div className="value-block">
                  <p>10:23 - 10:35</p>
                </div>
              </li>
              <li>
                <Typography variant="h6">Arrived to drop off:</Typography>
                <div className="value-block">
                  <p>10:52</p>
                </div>
              </li>
              <li>
                <Typography variant="h6">Unloaded:</Typography>
                <div className="value-block">
                  <p>11:32</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timesheet;
