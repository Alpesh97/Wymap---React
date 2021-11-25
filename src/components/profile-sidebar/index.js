import React from "react";
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
import { profileSidebarStyle } from "./style";
import { NavLink } from "react-router-dom";
import Logout from "../logout";

export default function ProfileSideBar() {
  const classes = profileSidebarStyle();
  return (
    <div className={classes.profilesidebar}>
      <aside className="white-card">
        <ul>
          <li>
            <NavLink to="/my-profile" activeClassName="active">
              <em>
                <img src={profile} alt="Profile" className="normal-img" />
                <img src={profileRed} alt="Profile" className="hover-img" />
                <img src={profileWhite} alt="Profile" className="active-img" />
              </em>
              Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" activeClassName="active">
              <em>
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
              </em>
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/trucks" activeClassName="active">
              <em>
                <img src={truckicon} alt="trucks" className="normal-img" />
                <img src={truckiconRed} alt="trucks" className="hover-img" />
                <img src={truckiconWhite} alt="trucks" className="active-img" />
              </em>
              Trucks
            </NavLink>
          </li>
          <li>
            <NavLink to="/toll-location" activeClassName="active">
              <em>
                <img src={location} alt="tollLocation" className="normal-img" />
                <img
                  src={locationRed}
                  alt="tollLocation"
                  className="hover-img"
                />
                <img
                  src={locationWhite}
                  alt="tollLocation"
                  className="active-img"
                />
              </em>
              Toll Locations
            </NavLink>
          </li>
          <li className="logout-link">
            <Logout />
          </li>
        </ul>
      </aside>
    </div>
  );
}
