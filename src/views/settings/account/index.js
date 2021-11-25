import React from "react";
import { SettingPageStyle } from "./style";
import Header from "@components/header";
import ProfileSideBar from "@components/profile-sidebar";
import { Typography, TextField, Button } from "@material-ui/core";

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
                  <form noValidate autoComplete="off" className="custom-form">
                    <div className="form-outer">
                      <Typography variant="h2">Account</Typography>
                      <div className="form-row">
                        <div className="form-group two-column">
                          <div className="label-wrapper">
                            <label className="label-text">Name</label>
                          </div>
                          <TextField
                            id="name"
                            placeholder="Archie Grant"
                            variant="outlined"
                          />
                        </div>
                        <div className="form-group two-column">
                          <div className="label-wrapper">
                            <label className="label-text">Email</label>
                          </div>
                          <TextField
                            id="email"
                            placeholder="archie@wymap.com.au"
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-outer">
                      <Typography variant="h2">Change password</Typography>
                      <div className="form-row">
                        <div className="form-group two-column">
                          <div className="label-wrapper">
                            <label className="label-text">
                              Current password
                            </label>
                          </div>
                          <TextField
                            id="current-password"
                            placeholder="Current password"
                            variant="outlined"
                            type="password"
                          />
                        </div>
                        <div className="form-group two-column">
                          <div className="label-wrapper">
                            <label className="label-text">New password</label>
                          </div>
                          <TextField
                            id="new-password"
                            placeholder="New password"
                            variant="outlined"
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-btn-wrapper">
                      <Button
                        className="orange-btn lg primary-btn"
                        color="inherit"
                        disableElevation
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
