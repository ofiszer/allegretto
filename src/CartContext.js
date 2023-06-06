import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.klucz === product.klucz);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.klucz === product.klucz) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  /*const removeFromCart = (product) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.klucz === product.klucz) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  };*/

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.klucz !== product.klucz);
    setCartItems(updatedCartItems);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
