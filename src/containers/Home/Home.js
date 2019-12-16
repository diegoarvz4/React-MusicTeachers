import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import SearchTeachers from './SearchTeachers/SearchTeachers';
import MusicTeachers from './MusicTeachers/MusicTeachers';
import Appointments from './Appointments/Appointments';
import { connect } from 'react-redux';
import { musicalInstrumentsStart } from '../../store/actions/musicalInstruments';
import { musicTeachersStart } from '../../store/actions/musicTeachers';
import { appointmentsStart } from '../../store/actions/appointments';
import BookAppointment from './BookAppointment/BookAppointment';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { 
      auth, 
      onMusicalInstrumentsStart, 
      onMusicTeachersStart,
      onAppointmentsStart
    } = this.props;
    onMusicalInstrumentsStart(auth.token);
    onMusicTeachersStart(auth.token);
    onAppointmentsStart(auth.token);
  }

  render(){
    return (
      <div>
        <Navigation />
        <Route path="/" exact component={SearchTeachers}/>
        <Route path="/music_teachers" exact component={MusicTeachers}/>
        <Route path="/music_teachers/book" component={BookAppointment}/>

        <Route path="/appointments" exact component={Appointments}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMusicalInstrumentsStart: (token) => dispatch(musicalInstrumentsStart(token)),
    onMusicTeachersStart: (token) => dispatch(musicTeachersStart(token)),
    onAppointmentsStart: (token) => dispatch(appointmentsStart(token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);