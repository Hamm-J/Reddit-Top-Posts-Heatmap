import styled from "styled-components";

export interface IButtonField {
  remFontSize: number;
  backgroundColor: string;
  fontColor: string;
}

export const ButtonField = styled.button<IButtonField>`
  font-size: ${(props) => props.remFontSize}rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border-style: none;
  padding: 0.3rem 0.4rem 0.3rem 0.4rem;
  cursor: pointer;
`;
