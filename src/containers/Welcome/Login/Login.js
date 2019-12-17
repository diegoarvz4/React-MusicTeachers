import React from 'react';
import { connect } from 'react-redux';
import { authStart } from '../../../store/actions/auth';
import './Login.css'

class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.onAuthStart(this.state);
  }

  render() {
    return(
      <div className="LoginFormContainer">
        <h1 className="LoginFormContainer-title">log in</h1>
        <form  onSubmit={this.handleLogin}>
          <div className="fieldContainer">
            <label htmlFor='email'>Email</label>
            <input type='email' value={this.state.email} onChange={this.handleInput} name='email'/>
          </div>
          
          <div className="fieldContainer">
            <label htmlFor='password'>Password</label>
            <input type='password' value={this.state.password} onChange={this.handleInput} name='password'/>
          </div>
          <button type='submit'>Login</button>
        </form>
        <hr />
        <span onClick={this.props.showSignUp}>Or SignUp</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthStart: (user) => dispatch(authStart(user)),
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
