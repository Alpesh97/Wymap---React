import React, { useState } from "react";
import {
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import uncheckedIcon from "@assets/images/uncheck-icon.svg";
import checkedIcon from "@assets/images/green-checked-icon.svg";
import TableListing from "../table-listing";
import { customerDetailCurrentActivityData } from "@utils/constant";

function TableDetail() {
  const [jobId, setJobId] = useState({});

  const handleChange = (event) => {
    setJobId({ ...jobId, [event.target.name]: event.target.checked });
  };

  return (
    <>
      {customerDetailCurrentActivityData.map((item, index) => {
        return (
          <div className="custom-card" key={index}>
            <div className="card-header">
              <div className="left-card-header">
                <FormGroup className="custom-checkbox">
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        name={item.id}
                        icon={<img src={uncheckedIcon} alt="CheckBox" />}
                        checkedIcon={<img src={checkedIcon} alt="CheckBox" />}
                        onChange={(e) => handleChange(e, index)}
                        checked={jobId[item.id] || false}
                      />
                    }
                    label={item.id}
                    labelPlacement="end"
                  />
                </FormGroup>
                <ul className="info-content-list">
                  <li>{item.kg}</li>
                  <li>{item.pc}</li>
                  <li>{item.dt}</li>
                </ul>
              </div>
              <div className="right-card-header">
                <Button
                  className="blue-btn primary-btn"
                  color="inherit"
                  disableElevation
                  underlinenone="true"
                >
                  VIEW JOB
                </Button>
              </div>
            </div>
            <div className={`card-body ${!jobId[item.id] && "disabled"} `}>
              <ul className="nett-tax-gross-list ">
                <li>
                  Nett: <span>{item.nett}</span>
                </li>
                <li>
                  Tax: <span>{item.tax}</span>
                </li>
                <li>
                  Gross: <span>{item.gross}</span>
                </li>
              </ul>
              <TableListing data={item.data} />
            </div>
          </div>
        );
      })}
    </>
  );
}
export default TableDetail;
