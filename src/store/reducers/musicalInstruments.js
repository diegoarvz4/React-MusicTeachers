import * as actionTypes from '../actions/actionTypes';

const initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MUSICAL_INSTRUMENTS_GET:
      return [...action.musicalInstruments]
    default:
      return state
  }
}