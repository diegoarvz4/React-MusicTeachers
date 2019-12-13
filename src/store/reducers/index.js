import { combineReducers } from 'redux';
import authReducer from './auth';
import musicalInstrumentsReducer from './musicalInstruments';
import musicGenresReducer from './musicGenres';

const rootReducer = combineReducers({
  authReducer,
  musInst: musicalInstrumentsReducer,
  musicGenres: musicGenresReducer,
})

export default rootReducer;