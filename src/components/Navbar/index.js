import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";
import { SiLamborghini } from "react-icons/si";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav className="z-depth-0">
        <NavLink to="/">
          <span>Audiolux</span>
        </NavLink>
        <NavIcon onClick={toggle}>
          <FaBars size={20} style={{ marginRight: 20, marginTop: 20 }} />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
