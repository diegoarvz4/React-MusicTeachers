import React from 'react';

export default (props) => {

  const formatDate = () => {
    const { date } = props;
    return date.split('T')[0];
  }

  const formatTime = () => {
    const { date } = props;
    return date.match(/\d\d:\d\d/)[0]
  }
 
  return (
    <div>
      <h1>Class with {props.musicTeacherName}</h1>
      <span>On {formatDate()}</span>
      <span>at {formatTime()} hours </span>
    </div>
  )
}