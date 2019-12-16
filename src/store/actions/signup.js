import { authSuccess, authFail } from './auth';
import axios from '../../axios';

export default (user) => {
  return dispatch => {
    axios.post('/signup', user)
    .then((response) => {
      dispatch(authSuccess({
        auth_token: response.data.auth_token[0],
        username: response.data.auth_token[1].username,
        email: response.data.auth_token[1].email,
        id: response.data.auth_token[1].id,
      }))
    })
    .catch(error => {
      dispatch(authFail(error))
    })
  }
}