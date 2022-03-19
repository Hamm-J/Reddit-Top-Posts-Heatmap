import React, { useState, useEffect } from "react";
import { auth } from "../../firebase-config";
import useFirebaseRegister from "../../api/Firebase/useFirebaseRegister";
import ReactDom from "react-dom";
import {
  RegisterScreenContainer,
  OverlayStyles,
  CloseWindowWrapper,
  ErrorMessage,
} from "./RegisterScreen.styled";
import InputText from "../common/InputText/InputText";
import InputEmail from "../common/InputEmail/InputEmail";
import Button from "../common/Button/Button";
import { SectionTitle, Para } from "../common/Markup/Markup.styled";

interface Props {
  open: boolean;
  onClose: () => void;
}
const registerPortal = document.getElementById(
  "register-portal"
) as HTMLElement;

const RegisterScreen = ({ open, onClose }: Props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const firebaseRegister = useFirebaseRegister(
    auth,
    registerEmail,
    registerPassword,
    setError,
    setLoading,
    onClose
  );

  const register = (e: any) => {
    e.preventDefault();
    firebaseRegister();
  };

  // when registerscreen is closed, clear error message
  useEffect(() => {
    setError("");
  }, [open]);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <OverlayStyles onClick={onClose}></OverlayStyles>
      <RegisterScreenContainer>
        <CloseWindowWrapper>
          <SectionTitle>Sign up!</SectionTitle>
          <Button onClick={onClose} label="X" minWidth={31}></Button>
        </CloseWindowWrapper>
        <Para>It's easy and quick!</Para>
        <form onSubmit={(e) => register(e)}>
          <InputEmail
            onChange={(e) => setRegisterEmail(e.target.value)}
            placeholder="Email..."
            remFontSize={1.2}
            required
          ></InputEmail>
          <InputText
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password..."
            remFontSize={1.2}
            required
          ></InputText>
          <Button
            type="submit"
            label={loading ? "..." : "Register"}
            remFontSize={1.1}
            minWidth={88}
            backgroundColor="orange"
            borderColor="orange"
            borderColorActive="black"
            borderColorHover="black"
          ></Button>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </RegisterScreenContainer>
    </>,
    registerPortal
  );
};

export default RegisterScreen;
