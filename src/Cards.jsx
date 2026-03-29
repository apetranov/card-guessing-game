import React from 'react'
import './App.css'

const cards = [
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
]

function Cards() {
  return (
    <div className='cards-grid'>
        {cards.map(card => (
            <div className='card' key={card.id}>{card.emoji}</div>
        ))}
    </div>
  )
}

export default Cards