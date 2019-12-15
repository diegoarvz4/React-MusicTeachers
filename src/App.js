import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';

function App({ authentication, isAuthenticated }) {
  console.log( isAuthenticated);
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
