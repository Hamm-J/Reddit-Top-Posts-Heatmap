import styled from "styled-components";

export const LoginContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  position: relative;
`;

export const ErrorMessage = styled.div`
  /* position: absolute;
  top: 90px; */
  margin-top: 4px;
  font-weight: bold;
  color: red;
  font-family: Verdana;
`;

export const LoggedInContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

export const LoggedOutContainer = styled.div``;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoggedInMessage = styled.div`
  margin-right: 15px;
  font-size: 22px;
  font-family: "Trebuchet MS";
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;
