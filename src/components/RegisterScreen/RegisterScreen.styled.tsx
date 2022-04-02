import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline";

export const RegisterScreenContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

export const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CloseWindowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

export const ErrorMessage = styled.div`
  font-weight: bold;
  color: red;
`;

export const RegisterForm = styled.form`
  display: flex;
  gap: 4px;
`;

export const CloseIcon = styled(CloseOutline)`
  width: 25px;
`;
