import React, { useState } from "react";
import { Button, FormControl } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import calendarIcon from "@assets/images/calendar-icon.svg";
import { CurrentActivityStyle } from "./style";
import IssueInvoice from "./issue-invoice";
import DownloadImage from "@assets/images/blue-download-icon.svg";
import TableDetail from "./table-detail";

function CurrentActivity() {
  const classes = CurrentActivityStyle();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.CurrentActivityWrapper}>
      <div className={classes.tabHeadingRow}>
        <div className="date-wrapper">
          <FormControl variant="outlined" className={classes.formControl}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                variant="inline"
                format="dd/MM/yyyy"
                value={selectedDate}
                className="custom-datepicker"
                onChange={handleDateChange}
                keyboardIcon={<img src={calendarIcon} alt="calendar" />}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </div>
        <div className="btn-wrapper">
          <div className="btn-inner-wrapper">
            <Button
              className="blue-btn primary-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
            >
              <img src={DownloadImage} alt="Download" />
              Download csv
            </Button>
            <Button
              className="blue-btn primary-btn"
              color="inherit"
              disableElevation
              underlinenone="true"
            >
              <img src={DownloadImage} alt="Download" />
              Download pdf
            </Button>
          </div>
        </div>
        <div className={classes.modalWrapper}>
          <IssueInvoice />
        </div>
      </div>
      <div className={classes.customCardWrapper}>
        <TableDetail />
      </div>
    </div>
  );
}
export default CurrentActivity;
