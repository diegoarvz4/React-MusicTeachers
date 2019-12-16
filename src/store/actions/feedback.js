import * as actionTypes from './actionTypes';

export const loadingFeedback = () => {
  return {
    type: actionTypes.LOADING_FEEDBACK,
  }
}

export const loadingFinish = () => {
  return {
    type: actionTypes.LOADING_FINISH,
  }
}

export const msgFeedbackSet = (msg) => {
  return {
    type: actionTypes.MSG_FEEDBACK_SET,
    feedbackMsg: true,
    msg: msg,
  }
}

export const msgFeedbackFinish = () => {
  return {
    type: actionTypes.MSG_FEEDBACK_FINISH,
    feedbackMsg: false,
    msg: {
      title: '',
      content: '',
      url: '',
    }
  }
}

export const appointmentFeedback = () => {
  return {
    type:actionTypes.APPOINTMENT_FEEDBACK,
  }
}

export const appointmentFinish = () => {
   return {
     type: actionTypes.APPOINTMENT_FINISH,
   }
 }
 