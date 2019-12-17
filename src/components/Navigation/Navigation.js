import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import menuIcon from './menu-icon.svg';

export default (props) => {
  return (
    <nav>
      <ul>
        <li onClick={props.showSideBar}><img src={menuIcon}/></li>
        <li><span>musiclass</span></li>
      </ul>
    </nav>
  );
}
