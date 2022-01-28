import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import Login from "../Login/Login";
import redditLogo from "../../images/redditLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={redditLogo} alt="reddit logo" height="50px" width="50px" />
      <Link to="/">Home</Link>
      <Link to="/user_dashboard">User Dashboard</Link>

      <Login></Login>
    </NavbarContainer>
  );
};

export default Navbar;
