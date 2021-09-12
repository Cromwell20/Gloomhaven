import React from 'react'

export default function Card({ card, toggleCard }) {
  function handleCardClick() {
    toggleCard(card.id)
  }
  let cardStyle = {
    backgroundColor: 'white'
  }
  if (card.lastDrawn == true) {
    cardStyle = {
      backgroundColor: 'green'
    }
    if (card.name == "Miss") {
      cardStyle = {
        backgroundColor: 'red'
      }
    }
  }

    return (
      <div style={cardStyle}>
        <label>
          <input type="checkbox" checked={card.drawn} onChange={handleCardClick} />
          {card.name}
        </label>
      </div>
    )


  }
