import React from 'react';
import { withRouter } from 'react-router-dom'

const ThemeBar = (props) => {
  
  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div>
      { console.log(props) }
      <span onClick={goBack}>Back</span> <span>{props.section}</span>
    </div>
  )
}

export default withRouter(ThemeBar);