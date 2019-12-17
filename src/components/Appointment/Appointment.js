import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>Class with {props.musicTeacherName}</h1>
      <span>On {props.date}</span>
      <span>{props.musicTeacherId}</span>
    </div>
  )
}