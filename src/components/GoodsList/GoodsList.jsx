import React, { useEffect, useState } from "react";
import { Wrapper, GoodList } from "./GoodsList.styled";
import GoodsItem from "../GoodsItem/GoodsItem";
import axios from "axios";
import { useCart } from "../CartContext/CartContext";
import { useShop } from "../ShopContext/ShopContext";

function GoodsList() {
  const [data, setData] = useState([]);
  const { addToCart } = useCart();
  const { products } = useShop();

  useEffect(() => {
    axios
      .get("http://localhost:5000/shop1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Помилка:", error);
      });
  }, []);

  return (
    <Wrapper>
      <GoodList>
        {products.length > 0 ? (
          products.map((product) => (
            <GoodsItem
              key={product._id}А
              product={product}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          data.map((product) => (
            <GoodsItem
              key={product._id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        )}
      </GoodList>
    </Wrapper>
  );
}

export default GoodsList;
