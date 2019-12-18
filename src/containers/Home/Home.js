import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import SearchTeachers from './SearchTeachers/SearchTeachers';
import MusicTeachers from './MusicTeachers/MusicTeachers';
import Appointments from './Appointments/Appointments';
import Sidebar from '../../components/Sidebar/Sidebar';
import BookAppointment from './BookAppointment/BookAppointment';

import { connect } from 'react-redux';
import { musicalInstrumentsStart } from '../../store/actions/musicalInstruments';
import { musicTeachersStart } from '../../store/actions/musicTeachers';
import { appointmentsStart } from '../../store/actions/appointments';
import { loggingOut } from '../../store/actions/auth';
import { musicGenresStart } from '../../store/actions/musicGenres';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    }
    this.showSideBar = this.showSideBar.bind(this);
    this.hideSideBar = this.hideSideBar.bind(this);
  }

  componentDidMount() {
    const { 
      auth, 
      onMusicalInstrumentsStart, 
      onMusicTeachersStart,
      onAppointmentsStart,
      onMusicGenresStart,
    } = this.props;
    onMusicalInstrumentsStart(auth.token);
    onMusicTeachersStart(auth.token);
    onAppointmentsStart(auth.token);
    onMusicGenresStart(auth.token)
  }

  showSideBar() {
    this.setState({
      sidebar: true,
    })
  }

  hideSideBar() {
    this.setState({
      sidebar: false,
    })
  }

  render(){
    return (
      <div>
        <Navigation showSideBar={this.showSideBar} />
        {
          this.state.sidebar 
          ? <Sidebar username={this.props.auth.username} hideSideBar={this.hideSideBar} logout={this.props.onLogout}/>
          : null 
        }
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
    onMusicGenresStart: (token) => dispatch(musicGenresStart(token)),
    onLogout: () => dispatch(loggingOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);