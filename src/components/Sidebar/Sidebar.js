import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default (props) => (
  <div className="sidebar">
    <h1>{props.username}</h1>
    <hr />
    <h2 onClick={props.hideSideBar}><Link to={{
      pathname: '/appointments'
    }}>Appointments</Link></h2>
    <h2 onClick={props.hideSideBar}><Link to={{
      pathname: '/'
    }}>Search Music Teachers</Link></h2>
    <hr />
    <h2 onClick={props.hideSideBar}>Logout</h2>
  </div>
)