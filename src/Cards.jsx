import React, { use } from 'react'
import { useState } from 'react';
import './App.css'

function Cards() {
    const [flippedCards, setFlippedCards] = useState([]);
    const [flippedCardsIndex, setFlippedCardsIndex] = useState(0);
    const [flippedCount, setFlippedCount] = useState(0);
    const [prevFlipped, setPrevflipped] = useState('');
    const [flipped, setFlipped] = useState('');
    const [cards, setCards] = useState([
    {
        id: 1,
        emoji: '🤔',
        flipped: false
    },
    {   
        id: 2,
        emoji: '🎞️',
        flipped: false
    },
    {
        id: 3,
        emoji: '🤔',
        flipped: false
    },
    {
        id: 4,
        emoji: '🎞️',
        flipped: false
    },
    {
        id: 5,
        emoji: '💰',
        flipped: false
    },
    {
        id: 6,
        emoji: '💰',
        flipped: false
    },
]);

    function handleFlip(toFlipId) {
        const cardsCopy = [...cards];
        const flippedCardsCopy = [...flippedCards];

        

        for (let i = 0; i < cardsCopy.length; i++) {
            if (cardsCopy[i].id === toFlipId) {
                if (!flippedCardsCopy.length) {
                    cardsCopy[i].flipped = true;
                    flippedCardsCopy.push(cardsCopy[i]);
                    
                } else if (flippedCardsCopy.length) {
                    if (cardsCopy[i].emoji === flippedCardsCopy[flippedCardsIndex].emoji) {
                        cardsCopy[i].flipped = true;
                        flippedCardsCopy.push(cardsCopy[i]);
                        setFlippedCardsIndex(flippedCardsIndex + 1);
                    }
                }
            }
        }

        console.log(flippedCardsCopy);

        // console.log(cardsCopy);
        setFlippedCards(flippedCardsCopy);
        setCards(cardsCopy);
    }

  return (
    <div className='cards-grid'>
        {cards.map(card => (
            <div 
                className='card' 
                key={card.id}
                onClick={() => {
                    // console.log(`card ${card.id} clicked`);
                    handleFlip(card.id);
                    setFlipped(card.emoji);
                }}
                >
                
                {card.flipped && card.emoji}
            </div>
        ))}
    </div>
  )
}

export default Cards