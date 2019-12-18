import { authSuccess, authFail } from './auth';
import { loadingFeedback, loadingFinish, msgFeedbackSet } from './feedback';
import axios from '../../axios';

export default (user) => {
  return dispatch => {
    dispatch(loadingFeedback());
    axios.post('/signup', user)
    .then((response) => {
      dispatch(authSuccess({
        auth_token: response.data.auth_token[0],
        username: response.data.auth_token[1].username,
        email: response.data.auth_token[1].email,
        id: response.data.auth_token[1].id,
      }))
      dispatch(loadingFinish());
      dispatch(msgFeedbackSet({
        title: 'Welcome! Successful Signup and Login!',
        content: 'Time to make appointments with the best music teachers!',
        url: null,
      }))
    })
    .catch(error => {
      dispatch(authFail(error))
      dispatch(loadingFinish());
      dispatch(msgFeedbackSet({
         title: 'An Error Ocurred!',
         content: 'You username could have been taken or your password and password confirmation does not match.',
         url: '/',
      }))
    })
  }
}