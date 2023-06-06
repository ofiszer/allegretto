import React, { useState, useEffect } from 'react';
import StarRatings from 'react-rating-stars-component';

const Rating = ({ productKey }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem(productKey, newRating);
  };

  useEffect(() => {
    const storedRating = localStorage.getItem(productKey);
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, [productKey]);

  return (
    <StarRatings
      count={5}
      value={rating}
      onChange={handleRatingChange}
      size={24}
      emptyIcon={<i className="far fa-star" />}
      fullIcon={<i className="fas fa-star" />}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
