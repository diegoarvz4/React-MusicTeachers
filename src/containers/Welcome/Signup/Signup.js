import React from 'react';
import { connect } from 'react-redux';
import signUpStart from  '../../../store/actions/signup';
import './Signup.css';

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
      <div className="SignupFormContainer">
        <h1 className="SignupFormContainer-title">Sign Up</h1>
        <form onSubmit={this.handleSignUp}>
          <div className="fieldContainer">
            <label htmlFor='username'>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleInput} name='username'/>
          </div>
          
          <div className="fieldContainer">
            <label htmlFor='email'>Email</label>
            <input type='email' value={this.state.email} onChange={this.handleInput} name='email'/>
          </div>
          
          <div className="fieldContainer">
            <label htmlFor='password'>Password</label>
            <input type='password' value={this.state.password} onChange={this.handleInput} name='password'/>
          </div>
          
          <div className="fieldContainer">
            <label htmlFor='password_confirmation'>Password Confirmation </label>
            <input type='password' value={this.state.password_confirmation} onChange={this.handleInput} name='password_confirmation'/>
          </div>

          <button type='submit'>Sign up</button>
        </form>
        <hr />
        <span onClick={this.props.showLogin}>Login</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUpStart: (user) => dispatch(signUpStart(user)), 
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm);
