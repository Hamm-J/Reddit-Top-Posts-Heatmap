import React from "react";
import ReactDom from "react-dom";
import {
  RegisterScreenContainer,
  OverlayStyles,
  CloseWindowWrapper,
} from "./RegisterScreen.styled";
import FirebaseRegister from "../../api/Firebase/FirebaseRegister";
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
        <FirebaseRegister onClose={onClose}></FirebaseRegister>
      </RegisterScreenContainer>
    </>,
    registerPortal
  );
};

export default RegisterScreen;
