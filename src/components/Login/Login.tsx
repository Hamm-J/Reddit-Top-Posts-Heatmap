import React, { useState, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { LoginContainer } from "./Login.styled";
import FirebaseLogin from "../../api/Firebase/FirebaseLogin";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import Button from "../common/Button/Button";

const Login = () => {
  const { user } = useContext<any>(FetcherContext);
  const [isOpen, setIsOpen] = useState(false);
  const register = () => {
    if (isOpen === !isOpen) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };
  return (
    <LoginContainer>
      <FirebaseLogin></FirebaseLogin>
      {!user && <Button label="Sign up?" onClick={register}></Button>}
      <RegisterScreen
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></RegisterScreen>
    </LoginContainer>
  );
};

export default Login;
