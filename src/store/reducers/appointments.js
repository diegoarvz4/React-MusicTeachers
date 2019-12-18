import * as actionTypes from '../actions/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPOINTMENT_SUCCESS:
      return [...state, action.appointment];
    case actionTypes.APPOINTMENTS_GET:
      return [...action.appointments];
    case actionTypes.APPOINTMENTS_CLEAR:
      return []
    default:
      return state;
  }
}