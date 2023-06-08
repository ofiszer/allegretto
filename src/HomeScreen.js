import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { CartContext } from './CartContext';
import AddProductForm from './AddProductForm';
import data from './data';

function HomeScreen() {
  const { cartItems, addToCart } = useContext(CartContext);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { produkty } = data;
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMouseEnter = (klucz) => {
    setHoveredProduct(klucz);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleFilter = () => {
    const filteredProducts = produkty.filter(
      (produkt) =>
        (minPrice === '' || produkt.cena >= parseInt(minPrice)) &&
        (maxPrice === '' || produkt.cena <= parseInt(maxPrice))
    );
    return filteredProducts;
  };

  const filteredProducts = handleFilter();

  return (
    <div>
      <h1>Produkty</h1>
      <div className="filters">
        <input
          type="number"
          placeholder="Min. cena"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max. cena"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="produkty">
        {filteredProducts.map((produkt) => (
          <div
            className="produkt"
            key={produkt.klucz}
            onMouseEnter={() => handleMouseEnter(produkt.klucz)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={`/produkt/${produkt.klucz}`}>
              <img src={produkt.obrazek} alt={produkt.nazwa} />
            </Link>
            <div className="produkt-info">
              <Link to={`/produkt/${produkt.klucz}`}>
                <p>{produkt.nazwa}</p>
              </Link>
              <p>
                <strong>{produkt.cena} PLN</strong>
              </p>
              {hoveredProduct === produkt.klucz && (
                <div>
                  <button onClick={() => addToCart(produkt)}>Dodaj do koszyka</button>
                  <Link to={`/produkt/${produkt.klucz}`}>
                    <button>Szczegóły</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
