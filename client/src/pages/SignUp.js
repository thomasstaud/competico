import React from 'react';
import SignUpForm from '../components/SignUp/SignUpForm'
  
const SignUp = () => {
  return (
    <div
      style={{
        margin: '5vh'
      }}
    >
      <h1>Registrieren</h1>
      <SignUpForm />
    </div>
  );
};
  
export default SignUp;