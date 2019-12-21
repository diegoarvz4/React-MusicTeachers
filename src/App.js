import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/Home/Home';
import Welcome from './containers/Welcome/Welcome';
import Loading from './components/Loading/Loading';
import Feedback from './components/Feedback/Feedback';
import './App.css';


function App({ isAuthenticated, feedback }) {
  return (
    <BrowserRouter>
      <div className="App">
        { feedback.loading
          ? <Loading />
          : null }
        {
          feedback.feedbackMsg
            ? <Feedback />
            : null
        }
        {
          isAuthenticated
            ? <Home />
            : <Welcome />
        }
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => (
  {
    authentication: state.authReducer,
    isAuthenticated: state.authReducer.token !== null,
    feedback: state.feedback,
  }
);

export default connect(mapStateToProps)(App);
