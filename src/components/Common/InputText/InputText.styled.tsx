import styled from "styled-components";

export interface IInputField {
  remFontSize: number;
  borderThickness: "thin" | "medium" | "thick";
}

export const InputField = styled.input.attrs({ type: "text" })<IInputField>`
  font-size: ${(props) => props.remFontSize}rem;
  border-width: ${(props) => props.borderThickness};
  border-color: black;
`;
