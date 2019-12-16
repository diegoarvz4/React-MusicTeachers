import * as actionTypes from '../actions/actionTypes';

const initialState = {
  musicTeachers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MUSIC_TEACHERS_GET:
      return [...action.musicTeachers]
    default: 
    return state
  }
}