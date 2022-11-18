import React from 'react';
import './LogInForm.css';

function LogInForm() {
    return(
      <div className="form">
          <div className="form-body">
            <div className="form-element">
                    <label className="form-label" for="userName">Username</label>
                    <input className="form-input" type="text" id="userName"/>
                </div>
                <div className="form-element">
                    <label className="form-label" for="password">Passwort</label>
                    <input className="form-input" type="password"  id="password"/>
                </div>
            </div>
            <div class="footer">
                <button className="btn" type="submit">Anmelden</button>
            </div>
          <div/>
      </div>      
    )       
}

export default LogInForm;