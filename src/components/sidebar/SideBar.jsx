import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
// import interact from
// 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

export default function SideBar({activePage, setActivePage}) {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to='/'>
              <li className= {`sidebar-list-item ${activePage === 'home' ? 'active': null}`} onClick={()=>setActivePage('home')} >
                <LineStyle className="sidebar-icon" />
                Home
              </li>
            </Link>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users">
              <li className= {`sidebar-list-item ${activePage === 'users' ? 'active': null}`} onClick={()=>setActivePage('users')}>
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>
            <li className="sidebar-list-item">
              <Storefront className="sidebar-icon" />
              Products
            </li>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
