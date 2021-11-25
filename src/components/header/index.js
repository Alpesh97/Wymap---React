import React, { useState } from "react";
import { Button, AppBar } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { ExpandMore } from "@material-ui/icons";

import siteLogo from "@assets/images/logo-white.svg";
import backArrow from "@assets/images/back-arrow.svg";
import call from "@assets/images/call.svg";
import HomeIcon from "@assets/images/home-icon.svg";
import { headerStyle } from "./style";
import { headerTop, getToken } from "@utils/commonFunctions";
import MenuPopup from "./menuPopup";
import { routes } from "@utils/constant";

function Header() {
  const history = useHistory();

  // for header padding
  window.addEventListener("load", function () {
    setTimeout(() => {
      headerTop();
    }, 150);
  });
  window.addEventListener("resize", function () {
    setTimeout(() => {
      headerTop();
    }, 150);
  });

  const classes = headerStyle();

  // for profile menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // for mobile menu
  const openMenu = () => {
    document.body.classList.toggle("open-menu");
    var element = document.querySelectorAll("li.has-submenu");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("open-submenu");
    }
  };

  // for profile menu
  const handleClose = (val) => {
    setAnchorEl(null);
    document.body.classList.remove("open-profile-menu");
    history.push(val);
  };
  const handleEnter = () => {
    document.body.classList.add("open-profile-menu");
  };

  // sub menu
  const subMenu = (event) => {
    event.preventDefault();
    if (window.innerWidth < 992) {
      var parentElement = event.target.closest("li.has-submenu");
      var element = document.querySelectorAll("li.has-submenu");
      for (let i = 0; i < element.length; i++) {
        if (element[i] === parentElement) {
          element[i].classList.toggle("open-submenu");
        } else {
          element[i].classList.remove("open-submenu");
        }
      }
    }
  };

  return (
    <div className={classes.headerWrapper}>
      <AppBar className="site-header" id="header">
        <div className="header-wrapper">
          <Link to={routes.dashboard} className="site-logo" title="Wymap">
            <img src={siteLogo} alt="Wymap" />
          </Link>
          <nav className="main-nav-wrapper">
            {getToken() ? (
              <div className="inner-nav-wrapper">
                <div className="main-nav-inner-wrapper">
                  <ul className="main-nav">
                    <li className="has-submenu dashboard-submenu">
                      <Link onClick={subMenu} to="/">
                        Dashboard
                      </Link>
                      <ExpandMore className="submenu-arrow" />
                      <ul className="sub-menu">
                        <li>
                          <Link to={routes.dashboard}>Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/">Customer Dashboard</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link onClick={subMenu} to="/">
                        Jobs
                      </Link>
                      <ExpandMore className="submenu-arrow" />
                      <ul className="sub-menu">
                        <li>
                          <Link to={routes.jobListing}>Jobs</Link>
                        </li>
                        <li>
                          <Link to="/">Map/Cockpit</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link onClick={subMenu} to="/">
                        Customer
                      </Link>
                      <ExpandMore className="submenu-arrow" />
                      <ul className="sub-menu">
                        <li>
                          <Link to={routes.customerListing}>Customer</Link>
                        </li>
                        <li>
                          <Link to="/">User</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={routes.driverListing}>Drivers</Link>
                    </li>
                    <li>
                      <Link to="/">Settings</Link>
                    </li>
                  </ul>
                </div>
                <div className="profile-nav-wrapper">
                  <MenuPopup
                    handleClick={(e) => handleClick(e)}
                    handleClose={(val) => handleClose(val)}
                    classes={classes}
                    anchorEl={anchorEl}
                    handleEnter={handleEnter}
                  />
                  <div className="mob-nav-icon" onClick={openMenu}>
                    <span></span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="home-nav-wrapper">
                <ul>
                  <li>
                    <Button
                      className="light-blue-btn primary-btn"
                      variant="contained"
                      color="primary"
                      disableElevation
                      title="Back to Wymap"
                    >
                      <img
                        className="back-icon"
                        src={backArrow}
                        alt="Back to Wymap"
                      />
                      <img
                        className="home-icon"
                        src={HomeIcon}
                        alt="Back to Wymap"
                      />
                      Back to Wymap
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="tel:+15182824642"
                      className="orange-btn primary-btn"
                      color="inherit"
                      title="Call Us"
                      disableElevation
                    >
                      <img src={call} alt="Call" />
                      1300 WYMAP1
                    </Button>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </AppBar>
    </div>
  );
}
export default Header;
