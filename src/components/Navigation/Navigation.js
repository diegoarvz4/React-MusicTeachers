import React from 'react';
import './Navigation.scss';
import menuIcon from './menu-icon.svg';

export default ({ showSideBar }) => (
  (
    <nav>
      <ul>
        <li onClick={showSideBar}>
          <img src={menuIcon} />
        </li>
        <li><span>musiclass</span></li>
      </ul>
    </nav>
  )
);
