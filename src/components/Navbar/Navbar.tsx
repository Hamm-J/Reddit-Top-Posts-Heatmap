import React, { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  NavbarContainer,
  NavbarLink,
  ImgAnchor,
  LinkWrapper,
  LoginWrapper,
} from "./Navbar.styled";
import Login from "../Login/Login";
import redditLogo from "../../images/redditLogo.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext<any>(FetcherContext);
  return (
    <NavbarContainer>
      <LinkWrapper>
        <ImgAnchor href="https://www.reddit.com/" target="_blank">
          <img src={redditLogo} alt="reddit logo" height="50px" width="50px" />
        </ImgAnchor>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/user_dashboard">User Dashboard</NavbarLink>
      </LinkWrapper>
      <LoginWrapper>
        <Login></Login>
      </LoginWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
