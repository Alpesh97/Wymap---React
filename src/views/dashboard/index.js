import React from "react";
import { FormControl } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { dashboardStyle } from "./style";
import Header from "@components/header";
import calendarIcon from "@assets/images/calendar-icon.svg";
import Tabbing from "./tabbing";
import DoughnutChart from "./chart";
import { dashboardListing, dashboardListingHeader } from "@utils/constant";

function Dashboard() {
  const classes = dashboardStyle();

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Header />
      <div className={classes.dashboardWrapper}>
        <div className="dashboard-page wrapper">
          <div className="inner-page">
            <div className="chart-block-wrapper">
              <div className="left-block">
                <div className="white-card">
                  <div className="chart-wrapper">
                    <DoughnutChart />
                  </div>
                  <div className="chart-content-wrapper">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <label className="label-text">Time Period:</label>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          variant="inline"
                          format="MMMM yyyy"
                          value={selectedDate}
                          className="custom-datepicker"
                          onChange={handleDateChange}
                          keyboardIcon={
                            <img src={calendarIcon} alt="calendar" />
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                    <ul className="chart-info">
                      <li>
                        <span className="yellow-text chart-info-dot">
                          Not assigned
                        </span>
                        <span className="text">3</span>
                      </li>
                      <li>
                        <span className="green-text chart-info-dot">
                          In progress
                        </span>
                        <span className="text">7</span>
                      </li>
                      <li>
                        <span className="primary-color-text chart-info-dot">
                          Completed
                        </span>
                        <span className="text">86</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-block">
                <div className="hours-wrapper">
                  <div className="hours-inner-wrapper">
                    <div className="white-card">
                      <span className="hours">3.4 hr</span>
                      <div className="hours-title">Average job duration</div>
                    </div>
                  </div>
                  <div className="hours-inner-wrapper">
                    <div className="white-card">
                      <span className="hours">2.1 hr</span>
                      <div className="hours-title">Average waiting time</div>
                    </div>
                  </div>
                  <div className="hours-inner-wrapper">
                    <div className="white-card">
                      <span className="hours">6.2 hr</span>
                      <div className="hours-title">Average driving time</div>
                    </div>
                  </div>
                  <div className="hours-inner-wrapper">
                    <div className="white-card">
                      <span className="hours">7.2 hr</span>
                      <div className="hours-title">
                        Average daily working time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Tabbing data={dashboardListing} heading={dashboardListingHeader} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
