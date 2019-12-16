import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>Class Confirmation</h1>
      <span>Teacher: {props.teacherName}</span>
      <span>Date: {props.date}</span>
      <span>Time: {props.time}</span>
    </div>
  );
}