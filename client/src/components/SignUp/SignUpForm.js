import React from 'react';
import './SignUpForm.css';

function SignUpForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="form-element">
                  <label className="form-label" for="userName">Username</label>
                  <input className="form-input" type="text" id="userName"/>
              </div>
              <div className="form-element">
                  <label className="form-label" for="email">E-Mail</label>
                  <input className="form-input"  type="email" id="email"/>
              </div>
              <div className="form-element">
                  <label className="form-label" for="password">Passwort</label>
                  <input className="form-input" type="password"  id="password"/>
              </div>
              <div className="form-element">
                  <label className="form-label" for="confirmPassword">Passwort erneut eingeben</label>
                  <input className="form-input" type="password" id="confirmPassword"/>
              </div>
          </div>
          <div class="footer">
              <button className="btn" type="submit">Registrieren</button>
          </div>
      </div>      
    )       
}

export default SignUpForm;