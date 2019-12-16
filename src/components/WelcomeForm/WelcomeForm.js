import React from 'react';

export default ({ showLogin, showSignUp }) => {
  return (
    <div>
      <button onClick={showLogin}>Log in</button>
      <h3>Or</h3>
      <button onClick={showSignUp}>Sign up</button>
    </div>
  );
}
