import React, { useState } from "react";
import { LoginContainer } from "./Login.styled";
import FirebaseLogin from "../../api/Firebase/FirebaseLogin";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import Button from "../common/Button/Button";

const Login = () => {
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
      <p>login</p>
      <FirebaseLogin></FirebaseLogin>
      <Button label="Register" onClick={register}></Button>
      {showRegisterScreen && <RegisterScreen></RegisterScreen>}
    </LoginContainer>
  );
};

export default Login;
