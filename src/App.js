import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Home from './containers/Home/Home';
import Welcome from './containers/Welcome/Welcome';

function App({ isAuthenticated }) {
  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated 
          ? <Home /> 
          : <Welcome />
        }
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authReducer,
    isAuthenticated: state.authReducer.token !== null
  };
}

export default connect(mapStateToProps)(App);
