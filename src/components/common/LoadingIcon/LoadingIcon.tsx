import React from "react";
import { Icon, IIcon } from "./LoadingIcon.styled";

interface Props {
  sizePixels: IIcon["sizePixels"];
  color: IIcon["color"];
}

const LoadingIcon = ({ sizePixels, color }: Props) => {
  return <Icon sizePixels={sizePixels} color={color} />;
};

export default LoadingIcon;
