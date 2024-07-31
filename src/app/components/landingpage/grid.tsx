"use client"; // Add this line at the top

import React, { useState } from 'react';

const cardData = [
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s",
    title: "The Statue",
    price: "0.3 ETH",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s",
    title: "NFT Art",
    price: "1.0 ETH",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s",
    title: "NFT Art",
    price: "1.0 ETH",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s",
    title: "NFT Art",
    price: "1.0 ETH",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s",
    title: "NFT Art",
    price: "1.0 ETH",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s",
    title: "NFT Art",
    price: "1.0 ETH",
  },
  // Add more card objects here
];

const Grid = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedCards = showAll ? cardData : cardData.slice(0, 3);

  return (
    <div className="artcollections">
      {displayedCards.map((card, index) => (
        <div className="art-card" key={index}>
          <img src={card.imgSrc} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.price}</p>
          <button>Place a bid</button>
        </div>
      ))}
          <div className='retract'>
      <button style={{ marginTop: "50px" }} onClick={handleToggle}>
        {showAll ? "Show Less" : "See All"}
      </button></div>
    </div>
  );
};

export default Grid;
