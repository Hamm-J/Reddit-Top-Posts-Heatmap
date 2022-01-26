import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import Login from "../Login/Login";
import redditLogo from "../../images/redditLogo.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={redditLogo} alt="reddit logo" height="50px" width="50px" />
      <Login></Login>
    </NavbarContainer>
  );
};

export default Navbar;
