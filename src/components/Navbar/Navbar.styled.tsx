import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #bbbbbb;
  padding: 10px 15px 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1290px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
