import React from 'react';

function StarRating({ rating, maxStars }) {
  const fullStars = Math.round((rating / maxStars) * maxStars);
  const emptyStars = maxStars - fullStars;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="text-yellow-400 mr-1">&#9733;</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={i + fullStars} className="text-gray-400 mr-1">&#9733;</span>);
  }

  return (
    <div className="flex items-center">
      {stars}
    </div>
  );
}

export default StarRating;