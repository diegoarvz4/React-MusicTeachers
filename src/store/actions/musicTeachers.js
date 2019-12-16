import * as actionTypes from './actionTypes';


export const musicTeachersGet = (musicTeachers) => {
  return {
    type: actionTypes.MUSIC_TEACHERS_GET,
    musicTeachers,
  }
}

export const musicTeachersStart = (auth_token) => {
  return dispatch => {
    axios.get('/music_teachers', {
      headers: {
        Authorization: auth_token
      },
    })
    .then(response => {
      dispatch(musicTeachersGet(response.data));
    })
    .catch(error => console.log(error))
  }
}