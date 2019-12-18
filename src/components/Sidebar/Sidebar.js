import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import closeIcon from './close-icon.svg';
import appoIcon from './appointment.svg';
import teachersIcon from './teachers.svg';

export default (props) => {

  const handleLogout = () => {
    props.hideSideBar();
    props.logout();
  }

  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h1 className="sidebar-user">{props.username}</h1>
        <img onClick={props.hideSideBar} src={closeIcon} />
      </div>
      <hr />
      <h2 onClick={props.hideSideBar}><Link className="sidebar-link" to={{
        pathname: '/appointments'
      }}><img src={appoIcon}/><span>Appointments</span></Link></h2>
      <h2 onClick={props.hideSideBar}><Link className="sidebar-link" to={{
        pathname: '/'
      }}><img src={teachersIcon}/><span>Search Music Teachers</span></Link></h2>
      <hr />
      <h2 className="sidebar-link sidebar-link-logout" onClick={handleLogout}>Logout</h2>
</div>
  )
}