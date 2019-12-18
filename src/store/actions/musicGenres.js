import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const musicGenresGet = (musicGenres) => {
  return {
    type: actionTypes.MUSIC_GENRES_GET,
    musicGenres,
  }
}

export const musicGenresStart = (auth_token) => {
  return dispatch => {
    axios.get('/music_genres', {
      headers: {
        Authorization: auth_token
      },
    })
    .then(response => {
      dispatch(musicGenresGet(response.data));
    })
    .catch(error => console.log(error))
  } 
}