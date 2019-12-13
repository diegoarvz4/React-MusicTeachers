import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SignUpForm from './components/signUpForm';
import LoginForm from './components/loginForm';

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <hr />
      <LoginForm />
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authReducer,
  };
}

export default connect(mapStateToProps)(App);
