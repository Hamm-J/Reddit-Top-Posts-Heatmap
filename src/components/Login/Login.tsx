import React, { useState, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { LoginContainer } from "./Login.styled";
import FirebaseLogin from "../../api/Firebase/FirebaseLogin";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import Button from "../common/Button/Button";

const Login = () => {
  const { user, isOpen, setIsOpen } = useContext<any>(FetcherContext);
  return (
    <LoginContainer>
      <FirebaseLogin></FirebaseLogin>
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
    </LoginContainer>
  );
};

export default Login;
