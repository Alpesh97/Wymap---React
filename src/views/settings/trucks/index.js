import React from "react";
import { SettingPageStyle } from "./style";
import Header from "@components/header";
import ProfileSideBar from "@components/profile-sidebar";
import TruckTable from "./table-listing";
import { Typography, TextField } from "@material-ui/core";
import UploadImage from "@assets/images/blue-upload.svg";
import AddTruck from "./add-truck";
import SearchIcon from "@assets/images/search.svg";

export default function settingPage() {
  const classes = SettingPageStyle();

  //file upload
  function uploadFile(event) {
    document.getElementById("file-name").innerHTML = event.target.files[0].name;
  }

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
                        <Typography variant="h1">Trucks</Typography>
                      </div>
                      <div className="right-block">
                        <div className="right-block-inner">
                          <div className="search-wrapper">
                            <div className="form-gourp">
                              <TextField
                                id="search-request"
                                placeholder="Search trucks"
                                variant="outlined"
                                type="search"
                                InputProps={{
                                  endAdornment: (
                                    <img src={SearchIcon} alt="Search" />
                                  ),
                                }}
                              />
                            </div>
                          </div>
                          <div className="modal-wrapper">
                            <div className="btn-wrapper">
                              <div className={classes.fileInput}>
                                <TextField
                                  id="photo"
                                  variant="outlined"
                                  type="file"
                                  multiple
                                  onChange={uploadFile}
                                />
                                <div className="label-block">
                                  <img src={UploadImage} alt="Upload" />
                                  <span className="file-name" id="file-name">
                                    Import csv
                                  </span>
                                </div>
                              </div>
                              <AddTruck />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <TruckTable />
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
