import React from 'react';
import { Btn, TotalPrice, Wrapper } from './SubmitBtn.styled';
import { useCart } from '../CartContext/CartContext';

function SubmitBtn({ onSubmit, totalPrice }) {
  const { cartFormData } = useCart();

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(cartFormData);
  };

  return (
    <Wrapper>
      <TotalPrice> Total Price: {totalPrice()}$</TotalPrice>
      <Btn type="submit" onClick={handleSubmit}>
        Submit
      </Btn>
    </Wrapper>
  );
}

export default SubmitBtn;
