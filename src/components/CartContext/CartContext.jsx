import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [cartFormData, setCartFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const addToCart = product => {
    const existingItemIndex = cartItems.findIndex(
      item => item._id === product._id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = productId => {
    setCartItems(cartItems.filter(item => item._id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const updateCartFormData = newFormData => {
    setCartFormData(newFormData);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        cartFormData,
        updateCartFormData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
