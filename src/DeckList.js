import React from 'react'
import Card from './Card'

export default function DeckList({ cards, toggleCard }) {
  return (
    cards.map(card => {
      return <Card key={card.id} toggleCard={toggleCard} card={card} />
    })
  )
}
