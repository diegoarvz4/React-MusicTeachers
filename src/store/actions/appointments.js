import * as actionTypes from './actionTypes';
import axios from '../../axios';
import { loadingFeedback, loadingFinish, msgFeedbackSet } from './feedback';

const appointmentSuccess = data => {
  return {
    type: actionTypes.APPOINTMENT_SUCCESS,
    appointment: {
      user_id: data.user_id,
      music_teacher_id: data.music_teacher_id,
      date: data.date,
    }
  }
}

const appointmentCreate = (token, appointment) => {
  return dispatch => {
    dispatch(loadingFeedback());
    axios.post('/appointments', appointment , {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      dispatch(appointmentSuccess({
        user_id: appointment.user_id,
        music_teacher_id: appointment.music_teacher_id,
        date: appointment.date
      }));
      dispatch(appointmentsStart(token))
      dispatch(loadingFinish());
      dispatch(msgFeedbackSet({
        title: 'New appointment created!',
        content: 'Checkout your appointments in the dashboard.',
        url: '/appointments'
      }));
    })
    .catch(() => {
      dispatch(loadingFinish());
      dispatch(msgFeedbackSet({
         title: 'An Error Ocurred!',
         content: 'Invalid submission form!',
         url: null,
      }))
    })
  }
}

const appointmentsGet = data => {
  return {
    type: actionTypes.APPOINTMENTS_GET,
    appointments: data
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
  }
}

const appointmentsClear = () => {
  return {
    type: actionTypes.APPOINTMENTS_CLEAR,
  }
}

export { appointmentsStart, appointmentCreate, appointmentsClear };