import React from 'react';
import FormCart from '../../components/FormCart/FormCart';
import GoodsCart from '../../components/GoodsCart/GoodsCart';
import { Wrapper } from './CartPage.styled';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
import { useCart } from '../../components/CartContext/CartContext';
import axios from 'axios';

function CartPage() {
  const { cartItems, getTotalPrice, cartFormData, updateCartFormData } =
    useCart();

  const cartItemNames = cartItems.map(item => item.name);

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        'https://backend-test-s1me.onrender.com/order/place-order',
        {
          ...cartFormData,
          cartItems: cartItemNames,
          totalPrice: getTotalPrice(),
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error placing order: ', error);
    }
  };

  return (
    <>
      <Wrapper>
        <FormCart onSubmit={updateCartFormData} />
        <GoodsCart cartItems={cartItems} />
      </Wrapper>
      <SubmitBtn totalPrice={getTotalPrice} onSubmit={handleFormSubmit} />
    </>
  );
}

export default CartPage;
