import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {children}
    </ShopContext.Provider>
  );
};