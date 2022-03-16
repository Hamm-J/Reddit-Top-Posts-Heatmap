import styled from "styled-components";

export interface IButtonField {
  remFontSize: number;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  borderColorHover: string;
  borderColorActive: string;
}

export const ButtonField = styled.button<IButtonField>`
  font-size: ${(props) => props.remFontSize}rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border: ${(props) => props.remFontSize / 12}rem solid
    ${(props) => props.borderColor};
  padding: 0.3rem 0.4rem 0.3rem 0.4rem;
  cursor: pointer;
  min-width: 100px;
  border-radius: 4px;
  outline: none;

  &:hover,
  &:focus {
    border-color: ${(props) => props.borderColorHover};
  }

  &:active {
    border-color: ${(props) => props.borderColorActive};
  }
`;
