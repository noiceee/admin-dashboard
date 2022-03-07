import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SideBarContext from "../../contexts/sideBarContext";
import "./topbar.scss";

function TopBar() {

  const { sideBarToggler } = useContext(SideBarContext);
  console.log(sideBarToggler);

  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <div
            className="navbar-toggler"
            onClick={() => {
              console.log("clicked");
              sideBarToggler((prev) => !prev);
            }}
          >
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <Link to="/">
            <span className="logo">AdminPanel</span>
          </Link>
        </div>
        <div className="top-right">
          <div className="topbar-icons">
            <div className="topbar-icon-wrapper">
              <NotificationsNone />
              <span className="notif-number">2</span>
            </div>
            <div className="topbar-icon-wrapper">
              <Language />
              <span className="notif-number">2</span>
            </div>
            <div className="topbar-icon-wrapper">
              <Settings />
            </div>
          </div>
          <img
            src="https://preview.redd.it/7q6vng58tlt71.jpg?width=736&format=pjpg&auto=webp&s=a71d5e5fe3fdb153d1308d80a333edd31bfd4e42"
            alt="profile-pic"
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
