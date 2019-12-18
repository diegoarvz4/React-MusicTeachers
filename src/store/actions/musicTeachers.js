import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const musicTeachersGet = (musicTeachers) => (
  {
    type: actionTypes.MUSIC_TEACHERS_GET,
    musicTeachers,
  }
);

export const musicTeachersStart = (authToken) => (
  dispatch => {
    axios.get('/music_teachers', {
      headers: {
        Authorization: authToken,
      },
    })
      .then(response => {
        dispatch(musicTeachersGet(response.data));
      });
  }
);
