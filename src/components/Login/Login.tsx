import React, { useState, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { LoginContainer } from "./Login.styled";
import FirebaseLogin from "../../api/Firebase/FirebaseLogin";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import Button from "../common/Button/Button";

const Login = () => {
  const { user } = useContext<any>(FetcherContext);
  const [showRegisterScreen, setShowRegisterScreen] = useState(false);
  const register = () => {
    if (showRegisterScreen === false) {
      setShowRegisterScreen(true);
    } else {
      setShowRegisterScreen(false);
    }
  };
  return (
    <LoginContainer>
      <FirebaseLogin></FirebaseLogin>
      {!user && <Button label="Sign up?" onClick={register}></Button>}
      {!user && showRegisterScreen && <RegisterScreen></RegisterScreen>}
    </LoginContainer>
  );
};

export default Login;
