import styled from "styled-components";

export interface IInputField {
  remFontSize: number;
  borderThickness: "thin" | "medium" | "thick";
}

export const InputField = styled.input.attrs({ type: "text" })<IInputField>`
  font-size: ${(props) => props.remFontSize}rem;
  border-width: ${(props) => props.borderThickness};
  border-color: black;
  outline: none;
  padding-left: ${(props) => props.remFontSize / 4}rem;
  padding-right: ${(props) => props.remFontSize / 4}rem;
  padding-top: ${(props) => props.remFontSize / 8}rem;
  padding-bottom: ${(props) => props.remFontSize / 8}rem;
`;
