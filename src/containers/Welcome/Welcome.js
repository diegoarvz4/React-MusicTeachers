import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm';
import './Welcome.scss';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      signup: false,
    };

    this.showLogin = this.showLogin.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
  }

  showLogin() {
    this.setState({
      login: true,
      signup: false,
    });
  }

  showSignUp() {
    this.setState({
      login: false,
      signup: true,
    });
  }

  render() {
    const { login, signup } = this.state;
    return (
      <div className="WelcomeContainer">
        <h1 className="LogoTitle">musiclass</h1>
        { login ? <Login showSignUp={this.showSignUp} /> : null }
        { signup ? <Signup showLogin={this.showLogin} /> : null }
        { login || signup
          ? null
          : (
            <div className="WelcomeWrapper">
              <h2>WELCOME</h2>
              <WelcomeForm showLogin={this.showLogin} showSignUp={this.showSignUp} />
            </div>
          )}
      </div>
    );
  }
}

export default Welcome;
