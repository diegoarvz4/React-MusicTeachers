import * as actionTypes from './actionTypes';
import { loadingFeedback, loadingFinish, msgFeedbackSet } from './feedback';
import { appointmentsClear } from './appointments';
import axios from '../../axios';

const authSuccess = (data) => (
  {
    type: actionTypes.AUTH_SUCCESS,
    token: data.auth_token,
    username: data.username,
    email: data.email,
    id: data.id,
  }
);

const authFail = (error) => (
  {
    type: actionTypes.AUTH_FAIL,
    error,
  }
);

const authStart = (user) => (
  dispatch => {
    dispatch(loadingFeedback());
    axios.post('/auth/login', user)
      .then(response => {
        dispatch(authSuccess({
          auth_token: response.data.auth_token,
          username: response.data.user_data.username,
          email: response.data.user_data.email,
          id: response.data.user_data.id,
        }));
        dispatch(loadingFinish());
        dispatch(msgFeedbackSet({
          title: 'Successful Login!',
          content: 'Time to make appointments with the best music teachers!',
          url: null,
        }));
      })
      .catch(error => {
        dispatch(authFail(error));
        dispatch(loadingFinish());
        dispatch(msgFeedbackSet({
          title: 'An Error Ocurred!',
          content: 'Credentials are not valid.',
          url: '/',
        }));
      });
  }
);

const logout = () => (
  {
    type: actionTypes.LOGOUT,
    logoutState: {
      token: null,
      username: null,
      email: null,
      id: null,
    },
  }
);

const loggingOut = () => (
  dispatch => {
    dispatch(appointmentsClear());
    dispatch(logout());
  }
);

export {
  authSuccess,
  authFail,
  authStart,
  loggingOut,
};
