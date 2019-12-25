import * as actionTypes from './actionTypes';
import axios from '../../axios';

const musicalInstrumentsGet = (mscInst) => (
  {
    type: actionTypes.MUSICAL_INSTRUMENTS_GET,
    musicalInstruments: mscInst,
  }
);

const musicalInstrumentsStart = (authToken) => (
  dispatch => {
    axios.get('/musical_instruments', {
      headers: {
        Authorization: authToken,
      },
    })
      .then(response => {
        dispatch(musicalInstrumentsGet(response.data));
      });
  }
);

export { musicalInstrumentsStart, musicalInstrumentsGet };
