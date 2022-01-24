import React from "react";
import { LoginContainer } from "./Login.styled";
import FirebaseAuth from "../../api/Firebase/FirebaseAuth";

const Login = () => {
  return (
    <LoginContainer>
      <FirebaseAuth></FirebaseAuth>
    </LoginContainer>
  );
};

export default Login;
