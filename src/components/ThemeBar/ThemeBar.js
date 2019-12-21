import React from 'react';
import { withRouter } from 'react-router-dom';
import './ThemeBar.scss';
import backArrow from './arrow_back.svg';

const ThemeBar = ({ history, section }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="themeBarContainer">
      <div className="themeBarContainer-head">
        <img src={backArrow} onClick={goBack} />
        <span>{section}</span>
      </div>
    </div>
  );
};

export default withRouter(ThemeBar);
