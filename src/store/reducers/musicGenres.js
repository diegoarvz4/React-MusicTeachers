import * as actionTypes from '../actions/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.MUSIC_GENRES_GET:
      return [...action.musicGenres]
    default:
      return state
  }
}