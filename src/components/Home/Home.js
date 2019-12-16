import React from 'react';
import Navbar from './nav/navbar';
import SearchTeachers from './Search/SearchTeachers';
import { connect } from 'react-redux';
import { musicalInstrumentsStart } from '../../store/actions/musicalInstruments';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onMusicalInstrumentsStart(this.props.auth.token);
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
    onMusicalInstrumentsStart: (token) => dispatch(musicalInstrumentsStart(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);