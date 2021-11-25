import React from "react";
import { TextField } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { consignmentsStyle } from "./style";
import SearchIcon from "@assets/images/search.svg";
import AddConsignment from "./add-consignment";
import AddNewItem from "./add-newItem";
import { consignMentData } from "@utils/constant";

function Consignments() {
  const classes = consignmentsStyle();

  return (
    <div className={classes.consignmentsWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className={classes.searchWrapper}>
          <div className="form-gourp">
            <TextField
              placeholder="Search consignments or items"
              variant="outlined"
              type="search"
              InputProps={{
                endAdornment: <img src={SearchIcon} alt="Search" />,
              }}
            />
          </div>
        </div>
        <div className={classes.modalWrapper}>
          <AddConsignment />
        </div>
      </div>
      <div className={classes.customCardWrapper}>
        {consignMentData.map((item, index) => {
          return (
            <div className="custom-card" key={index}>
              <div className="card-header">
                <span className="heading-title">{item.id}</span>
                <div className={classes.moreLinkWrapper}>
                  <div className="more-link-block">
                    <AddNewItem />
                    <span className="more-link">
                      <MoreVertIcon />
                    </span>
                  </div>
                </div>
              </div>
              {item.data.map((value, key) => {
                return (
                  <div className="card-body" key={key}>
                    <div className={classes.NewItemRowWrapper}>
                      <div className="new-item-row">
                        <div className="item-content-block">
                          <span className="inner-heading-title">
                            {value.consNo}
                          </span>
                          <ul>
                            <li>{value.weight} </li>
                            <li>{value.widthLength}</li>
                          </ul>
                        </div>
                        <div className={classes.moreLinkWrapper}>
                          <div className="more-link-block">
                            <span className="more-link">
                              <MoreVertIcon />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Consignments;
