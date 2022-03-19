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
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/user_dashboard">User Dashboard</NavbarLink>
          </>
        )}
      </LinkWrapper>
      <LoginWrapper>
        <Login></Login>
        {!user && (
          <Button
            label="Sign up?"
            onClick={() => setIsOpen(!isOpen)}
            remFontSize={1.1}
            backgroundColor="orange"
            borderColor="orange"
            borderColorActive="black"
            borderColorHover="black"
          ></Button>
        )}
        <RegisterScreen
          open={isOpen}
          onClose={() => setIsOpen(false)}
        ></RegisterScreen>
      </LoginWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
