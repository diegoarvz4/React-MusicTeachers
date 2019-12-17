import React from 'react';
import { withRouter } from 'react-router-dom'
import './ThemeBar.css';
import backArrow from './arrow_back.svg';

const ThemeBar = (props) => {
  
  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div className="themeBarContainer">
      <div className="themeBarContainer-head">
        <img src={backArrow} onClick={goBack} /> <span>{props.section}</span>
      </div> 
    </div>
  )
}

export default withRouter(ThemeBar);