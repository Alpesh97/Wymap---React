import React from "react";
import { TextField, Typography } from "@material-ui/core";

import Header from "@components/header";
import SearchIcon from "@assets/images/search.svg";
import { JojListingStyle } from "./style";
import CreateJob from "./create-job";
import Filter from "./filter";
import TableListing from "./table-listing";
import { dashboardListing, dashboardListingHeader } from "@utils/constant";

function JobListing() {
  const classes = JojListingStyle();

  return (
    <>
      <Header />
      <div className={classes.jobListingWrapper}>
        <div className="dashboard-page wrapper">
          <div className="inner-page">
            <div className={classes.innerPageTopBlock}>
              <div className="left-block">
                <Typography variant="h1">Jobs</Typography>
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
                  <div className="modal-wrapper">
                    <CreateJob />
                  </div>
                </div>
              </div>
            </div>
            <Filter />
            <TableListing
              heading={dashboardListingHeader}
              data={dashboardListing}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobListing;
