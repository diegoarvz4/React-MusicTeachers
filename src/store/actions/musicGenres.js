import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const musicGenresGet = (musicGenres) => (
  {
    type: actionTypes.MUSIC_GENRES_GET,
    musicGenres,
  }
);

export const musicGenresStart = (authToken) => (
  dispatch => {
    axios.get('/music_genres', {
      headers: {
        Authorization: authToken,
      },
    })
      .then(response => {
        dispatch(musicGenresGet(response.data));
      });
  }
);
