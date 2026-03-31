import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'

function Cards() {
    const [firstFlippedCard, setFirstFlippedCard] = useState();
    const [secondFlippedCard, setSecondFlippedCard] = useState();
    const [flippedCards, setFlippedCards] = useState([]);
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
])


    function isFlippedCard(id) {
        for (let i = 0; i < flippedCards.length; i++) {
            if (flippedCards[i].id === id) {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        if (firstFlippedCard && secondFlippedCard && firstFlippedCard.emoji === secondFlippedCard.emoji 
            && firstFlippedCard.id !== secondFlippedCard.id
        ) {
            // console.log("Cards match!", firstFlippedCard, secondFlippedCard);

            const copyArr = [...flippedCards];

            let firstCardIdFound = false;
            let secondCardIdFound = false;

            for (let i = 0; i < copyArr.length; i++) {
                if (copyArr[i].id === firstFlippedCard.id) {
                    firstCardIdFound = true;
                }
            }

            for (let i = 0; i < copyArr.length; i++) {
                if (copyArr[i].id === secondFlippedCard.id) {
                    secondCardIdFound = true;
                }
            }

            if (!firstCardIdFound) {
                copyArr.push(firstFlippedCard);
            }

            if (!secondCardIdFound) {
                copyArr.push(secondFlippedCard);
            }

            // console.log("Flipped cards arr: ", copyArr);

            setFlippedCards(copyArr);
            setFirstFlippedCard();
            setSecondFlippedCard();

        } else if (firstFlippedCard && secondFlippedCard && firstFlippedCard.emoji !== secondFlippedCard.emoji) {
            // console.log("Cards don't match!", firstFlippedCard, secondFlippedCard);
            setTimeout(() => {
                setFirstFlippedCard();
                setSecondFlippedCard();
            }, 1000)
            
            
        } else if (firstFlippedCard && secondFlippedCard && firstFlippedCard.id === secondFlippedCard.id) {
           // console.log("Cannot select same card twice!");
            setFirstFlippedCard();
            setSecondFlippedCard();
        } else {
           // console.log('Two cards are not flipped atm');
        }
    }, [firstFlippedCard, secondFlippedCard])

    function shuffleCards() {
        const cardsCopy = [...cards];
        cardsCopy.sort(() => Math.random() - 0.5);
        setCards(cardsCopy);
    }

  return (
    <div className='cards-grid'>
        {cards.map((card) => (
            <div 
                className='card' 
                key={card.id}
                onClick={() => {
                    // console.log(`card ${card.id} clicked`);
                    // handleFlip(card.id);
                    let cardCopy = { ...card };;
                    if (!firstFlippedCard) {
                        // console.log(card.id);
                        // card.flipped = true;
                        cardCopy.flipped = true;
                        setFirstFlippedCard(cardCopy);
                    } else if (firstFlippedCard && !secondFlippedCard) {
                        // card.flipped = true;
                        cardCopy.flipped = true;
                        setSecondFlippedCard(cardCopy);
                    }

                }}
                >
                
                {
                    isFlippedCard(card.id) ? card.emoji 
                    : firstFlippedCard && firstFlippedCard.id === card.id 
                    || secondFlippedCard && secondFlippedCard.id === card.id
                    ? card.emoji : ''
                }
            </div>
        ))}

        {flippedCards.length === cards.length && <button
            onClick={() => {
                shuffleCards();
                setFlippedCards([]);
            }}
            className='play-again-button'
        >Play again</button>}
    </div>
  )
}

export default Cards