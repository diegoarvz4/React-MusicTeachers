import React from 'react';
import './Appointment.css';

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
    <div className="AppointmentContainer">
      <h1 className="AppointmentContainer-teacher">Class with <span>{props.musicTeacherName}</span></h1>
      <div className="AppointmentContainer-Date">
        <span>On {formatDate()} at {formatTime()} hours</span>
      </div>
    </div>
  )
}