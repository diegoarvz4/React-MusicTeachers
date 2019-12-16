import React from 'react';
import { connect } from 'react-redux';
import signUpStart from  '../../../store/actions/signup';

class SignUpForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.onSignUpStart(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSignUp}>
        <h1>Sign Up</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' value={this.state.username} onChange={this.handleInput} name='username'/>

        <label htmlFor='email'>Email</label>
        <input type='email' value={this.state.email} onChange={this.handleInput} name='email'/>

        
        <label htmlFor='password'>Password</label>
        <input type='password' value={this.state.password} onChange={this.handleInput} name='password'/>

        
        <label htmlFor='password_confirmation'>Password Confirmation </label>
        <input type='password' value={this.state.password_confirmation} onChange={this.handleInput} name='password_confirmation'/>

        <button type='submit'>Sign up</button>
        <hr />
        <span onClick={this.props.showLogin}>Login</span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUpStart: (user) => dispatch(signUpStart(user)), 
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm);
