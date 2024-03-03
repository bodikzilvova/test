import React from 'react';
import { Wrapper } from './GoodsCart.styled';
import GoodsCartItem from '../GoodsCartItem/GoodsCartItem';

function GoodsCart({ cartItems }) {
  return (
    <Wrapper>
      {cartItems?.map((item, index) => (
        <GoodsCartItem key={index} product={item} />
      ))}
    </Wrapper>
  );
}

export default GoodsCart;
