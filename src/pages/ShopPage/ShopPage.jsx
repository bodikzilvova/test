import React from "react";
import ShopsList from "../../components/ShopsList/ShopsList";
import GoodsList from '../../components/GoodsList/GoodsList'
import {Wrapper} from './ShopPage.styled'
import { useCart } from "../../components/CartContext/CartContext";

function ShopPage() {
  const { addToCart, updateTotalPrice } = useCart();
  return (
    <Wrapper>
      <ShopsList />
    <GoodsList addToCart={addToCart} updateTotalPrice={updateTotalPrice}/>
    </Wrapper>
  );
}

export default ShopPage;
