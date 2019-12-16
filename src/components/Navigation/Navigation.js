import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default () => {
  return (
    <nav>
      <ul>
        <li><Link to={{
          pathname: '/appointments'
        }}>Appointments</Link></li>
        <li>Logo</li>
      </ul>
    </nav>
  );
}
