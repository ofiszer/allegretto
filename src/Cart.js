import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Product from './Product';
import data from './data';

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.cena * item.quantity, 0);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.klucz === product.klucz);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.klucz === product.klucz) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      addToCart(updatedCartItems);
    } else {
      addToCart([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  /*const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.klucz === product.klucz) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    removeFromCart(updatedCartItems);
  };*/
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  

  return (
    <div>
      <h2>Koszyk</h2>
      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.klucz}>
              <span>{item.nazwa}</span>
              <span>Cena: {item.cena} PLN</span>
              <span>Ilość: {item.quantity}</span>
              <button onClick={() => handleRemoveFromCart(item)}>Usuń</button>
            </li>
          ))}
        </ul>
      )}
      <p>Całkowita wartość: {calculateTotalPrice()} PLN</p>
      <h3>Dodaj produkty do koszyka:</h3>
      {data.produkty.map((produkt) => (
        <Product key={produkt.klucz} product={produkt} addToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default Cart;
