import * as actionTypes from './actionTypes';
import axios from '../../axios';

const musicalInstrumentsGet = (msc_inst) => {
  return {
    type: actionTypes.MUSICAL_INSTRUMENTS_GET,
    musicalInstruments: msc_inst,
  }
}

const musicalInstrumentsStart = (auth_token) => {
  return dispatch => {
    axios.get('/musical_instruments', {
      headers: {
        Authorization: auth_token
      },
    })
    .then(response => {
      dispatch(musicalInstrumentsGet(response.data));
    })
    .catch(error => console.log(error))
  }
 }

 export { musicalInstrumentsStart, musicalInstrumentsGet }