import React from 'react';
import { Wrapper } from './ShopItem.styled';
import { useShop } from '../ShopContext/ShopContext';
import axios from 'axios';

function ShopItem() {
  const { setProducts } = useShop();

  const fetchProducts = async shop => {
    try {
      const response = await axios.get(`http://localhost:5000/${shop}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  return (
    <>
      <Wrapper onClick={() => fetchProducts('shop1')}>
        <h3>Apotheke</h3>
      </Wrapper>
      <Wrapper onClick={() => fetchProducts('shop2')}>
        <h3>Drug store</h3>
      </Wrapper>
      <Wrapper onClick={() => fetchProducts('shop3')}>
        <h3>Pharmacy</h3>
      </Wrapper>
    </>
  );
}

export default ShopItem;
