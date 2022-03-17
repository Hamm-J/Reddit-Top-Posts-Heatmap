import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: coral;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginWrapper = styled.div``;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  margin-right: 40px;
  font-size: 26px;
  color: black;
  font-family: "Trebuchet MS";

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgAnchor = styled.a`
  margin-right: 40px;
`;
