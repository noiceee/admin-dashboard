import {  Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './topbar.scss';

function TopBar() {

    
  return (
  <div className='topbar'>
      <div className="topbar-wrapper">
          <div className="top-left">
              <span className="logo">AdminPanel</span>
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
              <img src="https://preview.redd.it/7q6vng58tlt71.jpg?width=736&format=pjpg&auto=webp&s=a71d5e5fe3fdb153d1308d80a333edd31bfd4e42" alt="profile-pic" className="top-avatar" />
          </div>
      </div>
  </div>
  );
}

export default TopBar;
