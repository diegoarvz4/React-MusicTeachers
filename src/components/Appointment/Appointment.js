import React from 'react';
import { withRouter } from 'react-router-dom';
import './Appointment.css';

const Appointment = (props) => {
  const formatDate = () => {
    const { date } = props;
    return date.split('T')[0];
  };

  const formatTime = () => {
    const { date } = props;
    return date.match(/\d\d:\d\d/)[0];
  };

  const toEditAppointment = (id) => {
    props.history.push({ pathname: '/music_teachers/book', hash: `edit${id}` });
  };

  const { musicTeacherName, appointmentDelete } = props;

  return (
    <div className="AppointmentContainer">
      <h1 className="AppointmentContainer-teacher">
        Class with
        <span>
          { musicTeacherName }
        </span>
      </h1>
      <div className="AppointmentContainer-Date">
        <span>{`On ${formatDate()} at ${formatTime()} hours`}</span>
      </div>
      <span className="edit" onClick={() => toEditAppointment(props.id)}>Edit</span>
      <span className="delete" onClick={appointmentDelete}>Delete</span>
    </div>
  );
};

export default withRouter(Appointment);
