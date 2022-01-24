import React from "react";
import { RegisterScreenContainer } from "./RegisterScreen.styled";
import FirebaseRegister from "../../api/Firebase/FirebaseRegister";

const RegisterScreen = () => {
  return (
    <RegisterScreenContainer>
      <FirebaseRegister></FirebaseRegister>
    </RegisterScreenContainer>
  );
};

export default RegisterScreen;
