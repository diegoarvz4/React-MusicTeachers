import React from 'react';
import './WelcomeForm.css';

export default ({ showLogin, showSignUp }) => (
  (
    <div className="WelcomeFormContainer">
      <button onClick={showLogin}>Log in</button>
      <span>Or</span>
      <button onClick={showSignUp}>Sign up</button>
    </div>
  )
);
