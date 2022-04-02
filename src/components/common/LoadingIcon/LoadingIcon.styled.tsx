import styled, { keyframes } from "styled-components";
import { Cycle } from "@styled-icons/entypo";

export interface IIcon {
  sizePixels: number;
  color: string;
}

const RefreshIconAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Icon = styled(Cycle)<IIcon>`
  width: ${(props) => props.sizePixels}px;
  color: ${(props) => props.color};
  animation-name: ${RefreshIconAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;
