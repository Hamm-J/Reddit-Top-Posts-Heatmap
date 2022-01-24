import React from "react";
import { LoginContainer } from "./Login.styled";
import FirebaseLogin from "../../api/Firebase/FirebaseLogin";
import FirebaseRegister from "../../api/Firebase/FirebaseRegister";

const Login = () => {
  return (
    <LoginContainer>
      <p>login</p>
      <FirebaseLogin></FirebaseLogin>
      <button>Create Account</button>
      <FirebaseRegister></FirebaseRegister>
      {/* <FirebaseAuth></FirebaseAuth> */}
    </LoginContainer>
  );
};

export default Login;
