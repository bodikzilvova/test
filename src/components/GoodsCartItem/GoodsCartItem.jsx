import React from 'react';
import {
  Btn,
  Img,
  InfoWrapper,
  Input,
  Title,
  Wrapper,
} from './GoodsCartItem.styled';
import { useCart } from '../CartContext/CartContext';

function GoodsCartItem({ product }) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product._id, newQuantity);
  };

  return (
    <Wrapper>
      <Img src={product.image} alt={product.name} />
      <InfoWrapper>
        <Btn onClick={handleRemoveFromCart}>X</Btn>
        <Title>{product.name}</Title>
        <p> Price: {product.price * product.quantity}</p>
        <Input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="100"
          defaultValue="1"
          value={product.quantity}
          onChange={handleQuantityChange}
        />
      </InfoWrapper>
    </Wrapper>
  );
}

export default GoodsCartItem;
