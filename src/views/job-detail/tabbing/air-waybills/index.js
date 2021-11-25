import React from "react";
import { TextField, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { airWayBillStyle } from "./style";
import SearchIcon from "@assets/images/search.svg";
import AddAirWayBill from "./add-bill";
import { addWayBillsData } from "@utils/constant";

function AirWayBill() {
  const classes = airWayBillStyle();

  return (
    <div className={classes.airWayBillWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className={classes.searchWrapper}>
          <div className="form-gourp">
            <TextField
              placeholder="Search air waybills"
              variant="outlined"
              type="search"
              InputProps={{
                endAdornment: <img src={SearchIcon} alt="Search" />,
              }}
            />
          </div>
        </div>
        <div className={classes.modalWrapper}>
          <AddAirWayBill />
        </div>
      </div>
      <div className={classes.customCardWrapper}>
        {addWayBillsData.map((item, index) => {
          return (
            <div className="custom-card" key={index}>
              <div className="card-header">
                <span className="heading-title">{item.id}</span>
                <div className={classes.moreLinkWrapper}>
                  <div className="more-link-block">
                    <span className="more-link">
                      <MoreVertIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <Typography variant="h6">Flight:</Typography>
                    <div className="value-block">
                      <p>{item.flight}</p>
                    </div>
                  </li>
                  <li>
                    <Typography variant="h6">Carrier:</Typography>
                    <div className="value-block">
                      <p>{item.carrier}</p>
                    </div>
                  </li>
                  <li>
                    <Typography variant="h6">Weight:</Typography>
                    <div className="value-block">
                      <p>{item.weight}</p>
                    </div>
                  </li>
                  <li>
                    <Typography variant="h6">Pieces:</Typography>
                    <div className="value-block">
                      <p>{item.pieces}</p>
                    </div>
                  </li>
                  <li>
                    <Typography variant="h6">ULD:</Typography>
                    <div className="value-block">
                      <p>{item.ULD}</p>
                    </div>
                  </li>
                  <li>
                    <Typography variant="h6">Notes:</Typography>
                    <div className="value-block">
                      <p>{item.notes}</p>
                    </div>
                  </li>
                  <li>
                    <Typography variant="h6">Status:</Typography>
                    <div className="value-block">
                      <p>{item.status}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AirWayBill;
