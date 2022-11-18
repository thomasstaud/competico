import React from 'react';
import LogInForm from '../components/LogIn/LogInForm'
  
const LogIn = () => {
  return (
    <div
      style={{
        margin: '5vh'
      }}
    >
      <h1>Anmelden</h1>
      <LogInForm />
    </div>
  );
};
  
export default LogIn;