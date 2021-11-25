import React from "react";
import { SettingPageStyle } from "./style";
import Header from "@components/header";
import ProfileSideBar from "@components/profile-sidebar";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import uncheckedIcon from "@assets/images/uncheck-icon.svg";
import checkedIcon from "@assets/images/checked-icon.svg";

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
                      <Typography variant="h2">Notifications</Typography>
                      <div className="form-row">
                        <div className="form-group two-column">
                          <FormControl component="fieldset">
                            <FormGroup
                              aria-label="position"
                              className="custom-checkbox"
                            >
                              <FormControlLabel
                                value="end"
                                control={
                                  <Checkbox
                                    icon={
                                      <img src={uncheckedIcon} alt="CheckBox" />
                                    }
                                    checkedIcon={
                                      <img src={checkedIcon} alt="CheckBox" />
                                    }
                                  />
                                }
                                label="Notify me on unassigned jobs"
                                labelPlacement="end"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                        <div className="form-group two-column">
                          <FormControl component="fieldset">
                            <FormGroup
                              aria-label="position"
                              className="custom-checkbox"
                            >
                              <FormControlLabel
                                value="end"
                                control={
                                  <Checkbox
                                    icon={
                                      <img src={uncheckedIcon} alt="CheckBox" />
                                    }
                                    checkedIcon={
                                      <img src={checkedIcon} alt="CheckBox" />
                                    }
                                  />
                                }
                                label="Send me daily jobs report"
                                labelPlacement="end"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="form-outer">
                      <div className="form-row">
                        <div className="form-group two-column">
                          <div className="label-wrapper">
                            <label className="label-text">
                              Email for notifications
                            </label>
                          </div>
                          <TextField
                            id="email"
                            placeholder="archie@wymap.com.au"
                            variant="outlined"
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
