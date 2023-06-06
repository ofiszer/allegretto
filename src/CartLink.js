import React from 'react';
import { Link } from 'react-router-dom';

function CartLink() {
  // Możesz umieścić tutaj odpowiednią logikę związana z liczbą produktów w koszyku
  const cartItemCount = 0; // Przykładowa liczba produktów w koszyku

  return (
    <Link to="/koszyk">
      Koszyk ({cartItemCount})
    </Link>
  );
}

export default CartLink;
