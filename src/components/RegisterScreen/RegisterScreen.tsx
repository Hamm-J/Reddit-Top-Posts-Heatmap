import React from "react";
import ReactDom from "react-dom";
import {
  RegisterScreenContainer,
  OverlayStyles,
  CloseWindowWrapper,
} from "./RegisterScreen.styled";
import FirebaseRegister from "../../api/Firebase/FirebaseRegister";
import Button from "../common/Button/Button";
import { SubSectionTitle, Para } from "../common/Markup/Markup.styled";

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
      <OverlayStyles></OverlayStyles>
      <RegisterScreenContainer>
        <CloseWindowWrapper>
          <SubSectionTitle>Sign up!</SubSectionTitle>
          <Button onClick={onClose} label="X"></Button>
        </CloseWindowWrapper>
        <Para>It's easy and quick!</Para>
        <FirebaseRegister></FirebaseRegister>
      </RegisterScreenContainer>
    </>,
    registerPortal
  );
};

export default RegisterScreen;
