import React from "react";
import { BannerTitleContainer, Title } from "./BannerTitle.styled";

interface Props {
  children: React.ReactNode;
}

const BannerTitle = ({ children }: Props) => {
  return (
    <BannerTitleContainer>
      <Title>{children}</Title>
    </BannerTitleContainer>
  );
};

export default BannerTitle;
