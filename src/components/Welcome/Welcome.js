import React from 'react';
import Login from './Login/loginForm';
import Signup from './Signup/signUpForm';
import WelcomeForm from './welcomeForm';
class Welcome extends React.Component {

  constructor() {
    super();
    this.state = {
      login: false,
      signup: false,
    }

    this.showLogin = this.showLogin.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
  }

  showLogin() {
    this.setState({
      login: true,
      signup: false,
    })
  }

  showSignUp() {
    this.setState({
      login: false,
      signup: true,
    })
  }

  render() {
    const { login, signup } = this.state
    return (
      <div>
        <h1>Musiclass Logo</h1>
        <h2>Welcome</h2>
        { login? <Login showSignUp={this.showSignUp}/> : null }
        { signup ? <Signup showLogin={this.showLogin}/> : null }
        { login || signup 
          ? null 
          : <WelcomeForm showLogin={this.showLogin} showSignUp={this.showSignUp} />
        }
       </div>
    );
  }
}

export default Welcome;
