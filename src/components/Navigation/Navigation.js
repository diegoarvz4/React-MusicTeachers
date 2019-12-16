import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default (props) => {
  return (
    <nav>
      <ul>
        <li onClick={props.showSideBar}> Ham</li>
        <li>Logo</li>
      </ul>
    </nav>
  );
}
