import * as actionTypes from './actionTypes';
import axios from '../../axios';
import { loadingFeedback, loadingFinish, msgFeedbackSet } from './feedback';

const appointmentSuccess = data => (
  {
    type: actionTypes.APPOINTMENT_SUCCESS,
    appointment: {
      user_id: data.user_id,
      music_teacher_id: data.music_teacher_id,
      date: data.date,
    },
  }
);

const appointmentsGet = data => (
  {
    type: actionTypes.APPOINTMENTS_GET,
    appointments: data,
  }
);

const appointmentsStart = token => (
  dispatch => {
    axios.get('/appointments', {
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        dispatch(appointmentsGet(response.data));
      });
  }
);

const appointmentCreate = (token, appointment) => (
  dispatch => {
    dispatch(loadingFeedback());
    axios.post('/appointments', appointment, {
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        dispatch(appointmentSuccess({
          user_id: appointment.user_id,
          music_teacher_id: appointment.music_teacher_id,
          date: appointment.date,
        }));
        dispatch(appointmentsStart(token));
        dispatch(loadingFinish());
        dispatch(msgFeedbackSet({
          title: 'New appointment created!',
          content: 'Checkout your appointments in the dashboard.',
          url: '/appointments',
        }));
      })
      .catch(() => {
        dispatch(loadingFinish());
        dispatch(msgFeedbackSet({
          title: 'An Error Ocurred!',
          content: 'Invalid submission form!',
          url: null,
        }));
      });
  }
);

const appointmentEdit = (id, appointment, token) => (
  dispatch => {
    dispatch(loadingFeedback());
    axios.put(`/appointments/${id}`, appointment, {
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        dispatch(appointmentsStart(token));
        dispatch(loadingFinish());
        dispatch(msgFeedbackSet({
          title: 'Appointment updated!',
          content: 'Checkout your appointments in the dashboard.',
          url: '/appointments',
        }));
      })
      .catch(() => {
        dispatch(loadingFinish());
        dispatch(msgFeedbackSet({
          title: 'An error has ocurred!',
          content: 'The appointment could not be updated.',
          url: '/appointments',
        }));
      });
  }
);
const appointmentDelete = (id, token) => (
  dispatch => {
    dispatch(loadingFeedback());
    axios.delete(`/appointments/${id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        dispatch(loadingFinish());
        dispatch(appointmentsStart(token));
        dispatch(msgFeedbackSet({
          title: 'Appointment deleted!',
          content: 'Checkout your appointments in the dashboard.',
          url: '/appointments',
        }));
      })
      .catch(() => {
        dispatch(loadingFinish());
        dispatch(appointmentsStart(token));
        dispatch(msgFeedbackSet({
          title: 'An error ocurred!',
          content: 'The appointment could not be deleted.',
          url: '/appointments',
        }));
      });
  }
);

const appointmentsClear = () => (
  {
    type: actionTypes.APPOINTMENTS_CLEAR,
  }
),

export {
  appointmentsStart,
  appointmentCreate,
  appointmentsClear,
  appointmentEdit,
  appointmentDelete,
};
