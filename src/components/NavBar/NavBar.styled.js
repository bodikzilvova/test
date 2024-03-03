import styled from "styled-components";

export const NavBarContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  height: 30px;
text-decoration: none;
`;

export const ShopNav = styled.span`
  color: blue;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
margin-right: 20px;

  &: hover {
    color: red;
  }
`;

export const Divider = styled.span`
  border-left: 2px solid #000;
`;

export const CartNav = styled.span`
  color: blue;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  margin-left: 20px;

  &: hover {
    color: red;
  }
`;
