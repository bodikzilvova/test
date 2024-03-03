import React from "react";
import { CartNav, Divider, NavBarContainer, ShopNav } from "./NavBar.styled";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <NavBarContainer>
      <NavLink to="/">
        <ShopNav>Shop</ShopNav>
      </NavLink>
 
 
      <Divider />

      <NavLink to="/shoppingCart">
        <CartNav>Shopping Cart</CartNav>
      </NavLink>
    </NavBarContainer>
  );
}

export default NavBar;
