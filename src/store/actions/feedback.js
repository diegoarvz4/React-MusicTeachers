import * as actionTypes from './actionTypes';

export const loadingFeedback = () => (
  {
    type: actionTypes.LOADING_FEEDBACK,
  }
);

export const loadingFinish = () => (
  {
    type: actionTypes.LOADING_FINISH,
  }
);

export const msgFeedbackSet = (msg) => (
  {
    type: actionTypes.MSG_FEEDBACK_SET,
    feedbackMsg: true,
    msg,
  }
);

export const msgFeedbackFinish = () => (
  {
    type: actionTypes.MSG_FEEDBACK_FINISH,
    feedbackMsg: false,
    msg: {
      title: '',
      content: '',
      url: '',
    },
  }
);

export const appointmentFeedback = () => (
  {
    type: actionTypes.APPOINTMENT_FEEDBACK,
  }
);

export const appointmentFinish = () => (
  {
    type: actionTypes.APPOINTMENT_FINISH,
  }
);
