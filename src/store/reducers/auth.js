import { AUTH_SUCCESS } from '../actions/actionTypes';

const initialState = {
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        token: action.token,
        username: action.username,
        email: action.email,
        id: action.id,
      }
    default:
      return state
  }
}
