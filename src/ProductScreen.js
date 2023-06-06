import React, { useState, useEffect } from 'react';
import RatingStars from './RatingStars';
import { useParams } from 'react-router-dom';
import data from './data';
import OpinionForm from './OpinionForm';

function ProductScreen({ addToCart }) {
  const params = useParams();
  const { klucz } = params;
  const produkt = data.produkty.find((produkt) => produkt.klucz === klucz);

  const [quantity, setQuantity] = useState(1);
  //const [rating, setRating] = useState(0);
  const initialRating = parseFloat(localStorage.getItem(`rating_${klucz}`)) || 0;
  const [rating, setRating] = useState(initialRating);
  const [opinions, setOpinions] = useState([]);

 // const initialRating = parseFloat(localStorage.getItem(`rating_${klucz}`)) || 0;
  //const [rating, setRating] = useState(initialRating);
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating_${klucz}`);
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, [klucz]);
  
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating_${klucz}`);
    if (savedRating) {
      setRating(Number(savedRating));
    }
    console.log('Wczytana ocena:', savedRating);
  }, [klucz]);
  


  const handleAddToCart = () => {
    addToCart({ klucz, quantity });
  };

 /* const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem(`rating_${klucz}`, newRating);
  };*/

  const handleRatingChange = (newRating) => {
    const ratingString = newRating.toString();
    setRating(newRating);
    localStorage.setItem(`rating_${klucz}`, ratingString);
    console.log('Nowa ocena:', newRating); // Dodaj ten wiersz
  };
  
  const handleAddOpinion = (opinion) => {
    setOpinions([...opinions, opinion]);
  };

  return (
    <div>
      
      <h2>{produkt.nazwa}</h2>
      <img src={produkt.obrazek} alt={produkt.nazwa} style={{ maxWidth: '400px', maxHeight: '400px' }}/>
      <p>Cena: {produkt.cena} PLN</p>
      <div>
        <label>
          Liczba:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
      </div>
      <div>
        <label>Opis: {produkt.opis}</label>
      </div>
      <button onClick={handleAddToCart}>Dodaj do koszyka</button>
      <RatingStars value={rating} onChange={handleRatingChange} />
      <OpinionForm addOpinion={handleAddOpinion} />
      <h3>Opinie:</h3>
      {opinions.map((opinion, index) => (
        <div key={index}>
          <div>
          <p>Autor: {opinion.author}</p>
          </div>
          <div>
          <p>Treść: {opinion.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductScreen;
