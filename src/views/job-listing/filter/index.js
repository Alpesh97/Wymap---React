import React, { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import filterIcon from "@assets/images/filter-icon.svg";
import closeIcon from "@assets/images/close.svg";
import { filterCommonStyles } from "@utils/filterCommonStyles";
import { materialCommonStyles } from "@utils/materialCommonStyles";
import calendarIcon from "@assets/images/calendar-icon.svg";

function Filter() {
  const [data, setData] = useState({
    jobStatus: "",
    truckRego: "",
    driver: "",
    customer: "",
    jobType: "",
    date: new Date(),
  });

  const handleChange = (event, type) => {
    if (type) {
      setData((prevState) => ({
        ...prevState,
        date: event,
      }));
    } else {
      const { name, value } = event.target;
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleClick = () => {
    console.log(data);
  };

  // open filter
  const openFilter = () => {
    document.body.classList.toggle("open-filter");
  };

  //   overlayClick
  const filterOverlay = () => {
    document.body.classList.remove("open-filter");
  };

  const classes = filterCommonStyles();
  const materilClasses = materialCommonStyles();

  return (
    <div className={classes.filterWrapper}>
      <div className="white-card filter-wrapper">
        <form noValidate autoComplete="off" className="custom-form">
          <div className="btn-wrapper">
            <Button
              className="primary-btn blue-btn"
              variant="contained"
              color="primary"
              disableElevation
              onClick={openFilter}
            >
              <img src={filterIcon} alt="Filter" />
              Filter
            </Button>
          </div>
          <div className="filter-overlay" onClick={filterOverlay}></div>
          <div className="form-row filter-form-row">
            <div className="filter-title-block form-gourp">
              <Typography variant="h2">Filter</Typography>
              <img src={closeIcon} alt="Close" onClick={filterOverlay} />
            </div>
            <div className="form-gourp">
              <div className="label-wrapper">
                <label className="label-text">Job Status</label>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  value={data.jobStatus}
                  name="jobStatus"
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  className={materilClasses.customSelect}
                  MenuProps={{
                    classes: { paper: materilClasses.customSelect },
                  }}
                  IconComponent={() => <ExpandMore />}
                >
                  <MenuItem value={""}>Select job status</MenuItem>
                  <MenuItem value={1}>Not assigned</MenuItem>
                  <MenuItem value={2}>In progress</MenuItem>
                  <MenuItem value={3}>Completed</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-gourp">
              <div className="label-wrapper">
                <label className="label-text">Truck Rego</label>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  value={data.truckRego}
                  onChange={(e) => handleChange(e)}
                  name="truckRego"
                  displayEmpty
                  className={materilClasses.customSelect}
                  MenuProps={{
                    classes: { paper: materilClasses.customSelect },
                  }}
                  IconComponent={() => <ExpandMore />}
                >
                  <MenuItem value={""}>Select truck rego</MenuItem>
                  <MenuItem value={1}>ULD</MenuItem>
                  <MenuItem value={2}>Loose</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-gourp">
              <div className="label-wrapper">
                <label className="label-text">Driver</label>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  value={data.driver}
                  onChange={(e) => handleChange(e)}
                  name="driver"
                  displayEmpty
                  className={materilClasses.customSelect}
                  MenuProps={{
                    classes: { paper: materilClasses.customSelect },
                  }}
                  IconComponent={() => <ExpandMore />}
                >
                  <MenuItem value={""}>Select Driver</MenuItem>
                  <MenuItem value={1}>Qantas</MenuItem>
                  <MenuItem value={2}>Menzies</MenuItem>
                  <MenuItem value={3}>Dnata</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-gourp">
              <div className="label-wrapper">
                <label className="label-text">Customer</label>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  value={data.customer}
                  onChange={(e) => handleChange(e)}
                  name="customer"
                  displayEmpty
                  className={materilClasses.customSelect}
                  MenuProps={{
                    classes: { paper: materilClasses.customSelect },
                  }}
                  IconComponent={() => <ExpandMore />}
                >
                  <MenuItem value={""}>Select customer</MenuItem>
                  <MenuItem value={1}>John Doe</MenuItem>
                  <MenuItem value={2}>Deliby Giver</MenuItem>
                  <MenuItem value={3}>Gilbert Johnathon</MenuItem>
                  <MenuItem value={4}>X-Import Pty Ltd Copy</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-gourp">
              <div className="label-wrapper">
                <label className="label-text">Job Type</label>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  value={data.jobType}
                  onChange={(e) => handleChange(e)}
                  name="jobType"
                  displayEmpty
                  className={materilClasses.customSelect}
                  MenuProps={{
                    classes: { paper: materilClasses.customSelect },
                  }}
                  IconComponent={() => <ExpandMore />}
                >
                  <MenuItem value={""}>Select job type</MenuItem>
                  <MenuItem value={1}>Import</MenuItem>
                  <MenuItem value={2}>Export</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-gourp">
              <div className="label-wrapper">
                <label className="label-text">Date</label>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    variant="inline"
                    name="date"
                    format="dd/MM/yyyy"
                    value={data.date}
                    className="custom-datepicker"
                    onChange={(e) => handleChange(e, "date")}
                    keyboardIcon={<img src={calendarIcon} alt="calendar" />}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </div>
            <div className="form-gourp filter-btn-wrapper">
              <Button
                className="primary-btn gray-border-btn"
                variant="contained"
                color="primary"
                disableElevation
              >
                RESET
              </Button>
              <Button
                className="orange-btn primary-btn"
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClick}
              >
                APPLY
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
