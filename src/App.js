import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
import Cart from './Cart';
import { CartProvider } from './CartContext';

function Header() {
  return (
    <header className="App-header">
      <Link to="/">Allegretto</Link>
      <Link to="/koszyk">Koszyk</Link>
    </header>
  );
}


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 }); // Początkowy przedział cenowy

  /*const addToCart = (product) => {
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
  };*/

  //const [cartItems, setCartItems] = useState([]);
  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
  };
  
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  return (
     <BrowserRouter>
      <CartProvider cartItems={cartItems} setCartItems={setCartItems}>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="/produkt/:klucz"
                element={<ProductScreen addToCart={addToCart} />}
              />
              <Route path="/koszyk" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
