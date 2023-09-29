import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.alt} />
    </div>
  );
}

export default Card;