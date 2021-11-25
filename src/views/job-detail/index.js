import React from "react";
import { DetailPageStyle } from "./style";
import { Link } from "react-router-dom";
import Header from "@components/header";
import EditBlock from "./edit-block";
import Tabbing from "./tabbing";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function DetailPage() {
  const classes = DetailPageStyle();
  return (
    <>
      <Header />
      <div className={classes.DetailPageWrapper}>
        <div className="wrapper job-detail-page">
          <div className="inner-page">
            <div className={classes.backLinkWrapper}>
              <Link to="/" className={classes.backToPage}>
                <ArrowBackIosIcon /> Back to jobs
              </Link>
            </div>
            <div className="detail-col-layout">
              <div className="left-block">
                <EditBlock />
              </div>
              <div className="right-block">
                <Tabbing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
