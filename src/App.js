import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './containers/Home/Home';
import Welcome from './containers/Welcome/Welcome';

function App({ isAuthenticated }) {
  return (
    <div className="App">
      {isAuthenticated 
        ? <Home /> 
        : <Welcome />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authReducer,
    isAuthenticated: state.authReducer.token !== null
  };
}

export default connect(mapStateToProps)(App);
