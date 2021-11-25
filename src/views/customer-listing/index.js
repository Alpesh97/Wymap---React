import React from "react";
import { CustomerListingStyle } from "./style";
import Header from "@components/header";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import SearchIcon from "@assets/images/search.svg";
import { materialCommonStyles } from "@utils/materialCommonStyles";
import AddCustomer from "./add-customer";
import TableListing from "./table-listing";
import { ExpandMore } from "@material-ui/icons";

export default function CustomerListing() {
  const classes = CustomerListingStyle();
  const materilClasses = materialCommonStyles();

  // for job status
  const [status, setStatus] = React.useState("");
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Header />
      <div className={classes.CustomerListingWrapper}>
        <div className="dashboard-page wrapper">
          <div className="inner-page">
            <div className={classes.innerPageTopBlock}>
              <div className="left-block">
                <Typography variant="h1">Customers</Typography>
              </div>
              <div className="right-block">
                <div className="right-block-inner">
                  <div className="search-wrapper">
                    <div className="form-gourp">
                      <TextField
                        id="search-request"
                        placeholder="Search by awb or customer"
                        variant="outlined"
                        type="search"
                        InputProps={{
                          endAdornment: <img src={SearchIcon} alt="Search" />,
                        }}
                      />
                    </div>
                  </div>
                  <div className="dropdown_wrapper">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <Select
                        value={status}
                        onChange={handleStatusChange}
                        displayEmpty
                        className={materilClasses.customSelect}
                        MenuProps={{
                          classes: { paper: materilClasses.customSelect },
                        }}
                        IconComponent={() => <ExpandMore />}
                      >
                        <MenuItem value={""}>Status</MenuItem>
                        <MenuItem value={1}>Not assigned</MenuItem>
                        <MenuItem value={2}>In progress</MenuItem>
                        <MenuItem value={3}>Completed</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="modal-wrapper">
                    <AddCustomer />
                  </div>
                </div>
              </div>
            </div>
            <TableListing />
          </div>
        </div>
      </div>
    </>
  );
}
