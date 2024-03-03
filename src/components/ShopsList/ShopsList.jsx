import React from 'react';
import { Title, Wrapper } from './ShopsList.styled';
import ShopItem from '../ShopItem/ShopItem';

function ShopsList() {
  return (
    <Wrapper>
      <Title> Shops: </Title>

      <ShopItem />
    </Wrapper>
  );
}

export default ShopsList;
