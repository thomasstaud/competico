import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Anmelden</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signup">Registrieren</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
