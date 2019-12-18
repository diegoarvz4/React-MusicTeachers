import { AUTH_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  token: null,
  username: null,
  email: null,
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        token: action.token,
        username: action.username,
        email: action.email,
        id: action.id,
      };
    case LOGOUT:
      return {
        ...state, ...action.logoutState,
      };
    default:
      return state;
  }
};
