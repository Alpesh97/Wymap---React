import React from "react";
import { SettingPageStyle } from "./style";
import Header from "@components/header";
import ProfileSideBar from "@components/profile-sidebar";
import TableListing from "./table-listing";
import { Typography } from "@material-ui/core";

export default function settingPage() {
  const classes = SettingPageStyle();

  return (
    <>
      <Header />
      <div className={classes.settingPageWrapper}>
        <div className="setting-page wrapper">
          <div className="inner-page">
            <Typography variant="h1">Settings</Typography>
            <div className="setting-row-wrapper">
              <div className="left-sidebar">
                <ProfileSideBar></ProfileSideBar>
              </div>
              <div className="right-content">
                <div className="white-card right-content-inner">
                  <div className="truck-page-outer">
                    <div className={classes.innerPageTopBlock}>
                      <div className="left-block">
                        <Typography variant="h1">Toll Locations</Typography>
                      </div>
                    </div>
                    <TableListing />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
