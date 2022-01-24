import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import Login from "../Login/Login";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Login></Login>
    </NavbarContainer>
  );
};

export default Navbar;
