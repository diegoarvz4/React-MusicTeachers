import React from 'react';
import { connect } from 'react-redux';
import { authStart } from '../store/actions/auth';

class LoginForm extends React.Component {
  
  constructor() {
    super();
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
      <form onSubmit={this.handleLogin}>
        <label htmlFor='email'>Email</label>
        <input type='email' value={this.state.email} onChange={this.handleInput} name='email'/>

        
        <label htmlFor='password'>Password</label>
        <input type='password' value={this.state.password} onChange={this.handleInput} name='password'/>

        <button type='submit'>Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthStart: (user) => dispatch(authStart(user)),
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
