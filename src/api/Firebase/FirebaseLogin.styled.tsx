import styled from "styled-components";

export const FirebaseLoginContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  position: relative;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 30px;
  font-weight: bold;
  color: red;
`;

export const LoggedInContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

export const LoggedOutContainer = styled.div`
  display: flex;
`;

export const LoggedInMessage = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;