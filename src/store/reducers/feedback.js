import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  feedbackMsg: false,
  msg: {
    title: '',
    content: '',
    url: '',
  },
  appointmentCreated: false,
  appointmentFinish: false,
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOADING_FEEDBACK:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.LOADING_FINISH:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.MSG_FEEDBACK_SET:
      return {
        ...state,
        ...action,
      }
    case actionTypes.MSG_FEEDBACK_FINISH:
      return {
        ...state,
        ...action,
      }
    case actionTypes.APPOINTMENT_FEEDBACK:
      return {
        ...state,
        appointmentCreated: true,
      }
    case actionTypes.APPOINTMENT_FINISH:
      return {
        ...initialState
      }
    default:
      return state;
  }
}