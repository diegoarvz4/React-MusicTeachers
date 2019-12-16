import { combineReducers } from 'redux';
import authReducer from './auth';
import musicalInstrumentsReducer from './musicalInstruments';
import musicGenresReducer from './musicGenres';
import musicTeachersReducer from './musicTeachers';

const rootReducer = combineReducers({
  authReducer,
  musInst: musicalInstrumentsReducer,
  musicGenres: musicGenresReducer,
  musicTeachers: musicTeachersReducer
})

export default rootReducer;