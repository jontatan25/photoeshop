import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import NavLinks from "./NavLinks";

const NavDesktop = ({ open, setOpen }) => {
  return (
    <>
      <Link className="nav__desktop" to={"/"}>
          <img src={logo} className="App-logo" alt="logo" />
       
      </Link>
      <nav className="nav__desktop">
        <NavLinks className="nav__desktop" open={open} setOpen={setOpen} />
      </nav>
    </>
  );
};

export default NavDesktop;
