import * as actionTypes from './actionTypes';
import axios from '../../axios';

const appointmentSuccess = data => {
  return {
    type: actionTypes.APPOINTMENT_SUCCESS,
    appointment: {
      user_id: data.user_id,
      music_teacher_id: data.music_teacher_id,
      date: data.date,
      time: data.time,
    }
  }
}

const appointmentCreate = (token, appointment) => {
  return dispatch => {
    axios.post('/appointments', appointment , {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      console.log(response);
      dispatch(appointmentSuccess({
        user_id: appointment.user_id,
        music_teacher_id: appointment.music_teacher_id,
        date: appointment.date,
        time: appointment.time,
      }))
    })
  }
}

const appointmentsGet = data => {
  return {
    type: actionTypes.APPOINTMENTS_GET,
    appointments: data.appointments
  }
}

const appointmentsStart = token => {
  return dispatch => {
    axios.get('/appointments', {
      headers: {
        Authorization: token,
      }
    })
    .then(response => {
      dispatch(appointmentsGet(response.data));
    })
    .catch(error => console.log(error));
  }
}

export { appointmentsStart, appointmentCreate };