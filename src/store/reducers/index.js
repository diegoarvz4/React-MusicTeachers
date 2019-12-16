import { combineReducers } from 'redux';
import authReducer from './auth';
import musicalInstrumentsReducer from './musicalInstruments';
import musicGenresReducer from './musicGenres';
import musicTeachersReducer from './musicTeachers';
import appointmentsReducer from './appointments';

const rootReducer = combineReducers({
  authReducer,
  musInst: musicalInstrumentsReducer,
  musicGenres: musicGenresReducer,
  musTeachers: musicTeachersReducer,
  appointments: appointmentsReducer,
})

export default rootReducer;