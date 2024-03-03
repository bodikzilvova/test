import React from "react";
import {
  Wrapper,
  Img,
  NameWrapper,
  ProductName,
  ProductPrice,
  Button,
} from "./GoodsItem.styled";


function GoodsItem({ product, onAddToCart }) {

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Wrapper>
      <Img src={product.image} alt="Product" />
      <NameWrapper>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>Price: {product.price}</ProductPrice>
      </NameWrapper>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </Wrapper>
  );
}

export default GoodsItem;
