import React from 'react';
import Navbar from './nav/navbar';
import SearchTeachers from './Search/SearchTeachers';
import { connect } from 'react-redux';
import { musicalInstrumentsStart } from '../../store/actions/musicalInstruments';
import { musicTeachersStart } from '../../store/actions/musicTeachers';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { 
      auth, 
      onMusicalInstrumentsStart, 
      onMusicTeachersStart 
    } = this.props;
    onMusicalInstrumentsStart(auth.token);
    onMusicTeachersStart(auth.token);
  }

  render(){
    return (
      <div>
        <Navbar />
        <SearchTeachers />
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);