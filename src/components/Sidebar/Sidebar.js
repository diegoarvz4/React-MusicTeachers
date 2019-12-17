import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default (props) => {

  const handleLogout = () => {
    props.hideSideBar();
    props.logout();
  }

  return (
    <div className="sidebar">
      <h1>{props.username}</h1>
      <span onClick={props.hideSideBar}>Close</span>
      <hr />
      <h2 onClick={props.hideSideBar}><Link to={{
        pathname: '/appointments'
      }}>Appointments</Link></h2>
      <h2 onClick={props.hideSideBar}><Link to={{
        pathname: '/'
      }}>Search Music Teachers</Link></h2>
      <hr />
      <h2 onClick={handleLogout}>Logout</h2>
</div>
  )
}