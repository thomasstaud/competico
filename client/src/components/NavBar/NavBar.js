import "./NavBar.css";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-menu">
          <div className="nav-link" to="/" activeStyle>
            Home
          </div>
        </div>
        <div className="nav-btn">
          <div className="nav-btn-link" to="/login">Anmelden</div>
        </div>
        <div className="nav-btn">
          <div className="nav-btn-link" to="/signup">Registrieren</div>
        </div>
      </div>
    </>
  );
};
