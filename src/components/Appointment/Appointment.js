import React from 'react';
import { withRouter } from 'react-router-dom';
import './Appointment.scss';

const Appointment = (props) => {
  const formatDate = () => {
    const { date } = props;
    return date.split('T')[0];
  };

  const formatTime = () => {
    const { date } = props;
    return date.match(/\d\d:\d\d/)[0];
  };

  const { musicTeacherName, appointmentDelete } = props;

  return (
    <div className="AppointmentContainer">
      <h2 className="AppointmentContainer-teacher">
        Class with
        <span>
          { ` ${musicTeacherName}` }
        </span>
      </h2>
      <div className="AppointmentContainer-Date">
        <span>{`On ${formatDate()} at ${formatTime()} hours`}</span>
      </div>
      <span className="delete" onClick={appointmentDelete}>Delete</span>
    </div>
  );
};

export default withRouter(Appointment);
