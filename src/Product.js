import React from 'react';
import RatingStars from './RatingStars';

function Product({ product, addToCart }) {
  const handleRatingChange = (newRating) => {
    // Obsługa zmiany oceny
  };

  /*return (
    <div className="produkt" key={product.klucz}>
      <img src={product.obrazek} alt={product.nazwa} />
      <div className="produkt-info">
        <p>{product.nazwa}</p>
        <p>
          <strong>{product.cena} PLN</strong>
        </p>
        <p>
          <strong>{product.opis}</strong>
        </p>
        <button onClick={() => addToCart(product)}>Dodaj2 do koszyka</button>
        <Rating />
      </div>
      
    </div>
  );*/
  return (
    <div className="produkt" key={product.klucz}>
      <img src={product.obrazek} alt={product.nazwa} />
      <div className="produkt-info">
        <p>{product.nazwa}</p>
        <p>
          <strong>{product.cena} PLN</strong>
        </p>
        <p>
          <strong>{product.opis}</strong>
        </p>
        <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
        <RatingStars value={product.ocena} onChange={handleRatingChange} />
      </div>
    </div>
  );
}

export default Product;
