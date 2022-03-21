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
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import Button from "../common/Button/Button";
import redditLogo from "../../images/redditLogo.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isOpen, setIsOpen } = useContext<any>(FetcherContext);
  return (
    <NavbarContainer>
      <LinkWrapper>
        <ImgAnchor href="https://www.reddit.com/" target="_blank">
          <img src={redditLogo} alt="reddit logo" height="50px" width="50px" />
        </ImgAnchor>
        {user && (
          <>
            <NavbarLink to="/">Search</NavbarLink>
            <NavbarLink to="/user_dashboard">Snapshots</NavbarLink>
          </>
        )}
      </LinkWrapper>
      <LoginWrapper>
        <Login></Login>
        <RegisterScreen
          open={isOpen}
          onClose={() => setIsOpen(false)}
        ></RegisterScreen>
      </LoginWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
