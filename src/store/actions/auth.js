import * as actionTypes from './actionTypes';
import { loadingFeedback, loadingFinish, msgFeedbackSet } from './feedback';
import axios from '../../axios';

const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.auth_token,
    username: data.username,
    email: data.email,
    id: data.id,
  }
}

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

const authStart = (user) => {
  return dispatch => {
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
        title: 'Succesfull Logn!',
        content: 'Try making appointments with teachers!',
        url: null,
      }))
    })
    .catch(error => {
      dispatch(authFail(error))
    })
  }
}

export { authSuccess, authFail, authStart };