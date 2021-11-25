import React from "react";
import { MenuItem, Menu, Button } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { routes } from "@utils/constant";
import profile from "@assets/images/profile.svg";
import profileRed from "@assets/images/profile-red.svg";
import profileWhite from "@assets/images/profile-white.svg";
import notification from "@assets/images/notification.svg";
import notificationRed from "@assets/images/notification-red.svg";
import notificationWhite from "@assets/images/notification-white.svg";
import truckicon from "@assets/images/truck-icon.svg";
import truckiconRed from "@assets/images/truck-icon-red.svg";
import truckiconWhite from "@assets/images/truck-icon-white.svg";
import location from "@assets/images/location.svg";
import locationRed from "@assets/images/locationRed.svg";
import locationWhite from "@assets/images/locationWhite.svg";
import Logout from "../logout";
import ArchieGrant from "@assets/images/archie-grant.png";

function MenuPopup(props) {
  return (
    <>
      <ul className="profile-menu">
        <li>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={props.handleClick}
            className="light-blue-btn primary-btn"
            endIcon={<ExpandMore />}
          >
            <img src={ArchieGrant} alt="DHL" />
            Archie Grant
          </Button>
          <Menu
            id="simple-menu"
            className={props.classes.customMenu}
            menuprops={{ classes: { paper: props.classes.customMenu } }}
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
            onEnter={props.handleEnter}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => props.handleClose(routes.myProfile)}>
              <img src={profile} alt="Profile" className="normal-img" />
              <img src={profileRed} alt="Profile" className="hover-img" />
              <img src={profileWhite} alt="Profile" className="active-img" />
              Account
            </MenuItem>
            <MenuItem onClick={() => props.handleClose(routes.notifications)}>
              <img
                src={notification}
                alt="Notifications "
                className="normal-img"
              />
              <img
                src={notificationRed}
                alt="Notifications"
                className="hover-img"
              />
              <img
                src={notificationWhite}
                alt="Notifications"
                className="active-img"
              />
              Notifications
            </MenuItem>
            <MenuItem onClick={() => props.handleClose(routes.trucks)}>
              <img
                src={truckicon}
                alt="Notifications "
                className="normal-img"
              />
              <img
                src={truckiconRed}
                alt="Notifications"
                className="hover-img"
              />
              <img
                src={truckiconWhite}
                alt="Notifications"
                className="active-img"
              />
              Trucks
            </MenuItem>
            <MenuItem onClick={() => props.handleClose(routes.tollLocation)}>
              <img src={location} alt="Toll Location" className="normal-img" />
              <img
                src={locationRed}
                alt="Toll Location"
                className="hover-img"
              />
              <img
                src={locationWhite}
                alt="Toll Location"
                className="active-img"
              />
              Toll Locations
            </MenuItem>
            <MenuItem className="logout-link">
              <Logout />
            </MenuItem>
          </Menu>
        </li>
      </ul>
    </>
  );
}

export default MenuPopup;
