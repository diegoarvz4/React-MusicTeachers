import { AUTH_SUCCESS } from './actionTypes';

const authenticate = (token) => (
  { 
    type: AUTH_SUCCESS,
    token,
  }
);