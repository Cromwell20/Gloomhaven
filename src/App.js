import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import DeckList from './DeckList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'Gloomhaven.cards'

function App() {
  const [cards, setCards] = useState([])
  const designatedCard = useRef()
  let drawnCard = []

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedCards) setCards(storedCards)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards))
  }, [cards])

  function toggleCard(id) {
    const newCards = [...cards]
    const card = newCards.find(card => card.id === id)
    card.drawn = !card.drawn
    setCards(newCards)
  }

  function handleAddCard(e) {
    const name = designatedCard.current.value
    if (name === '') return
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: name, drawn: false, lastDrawn: false }]
    })
    designatedCard.current.value = null
  }

  function handleClearCards() {
    const newCards = cards.filter(card => !card.drawn)
    setCards(newCards)
  }

  function handleReplaceCards() {
    const newCards = cards.filter(card => !card.drawn)
    setCards(newCards)
    const name = designatedCard.current.value
    if (name === '') return
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: name, drawn: false, lastDrawn: false }]
    })
    designatedCard.current.value = null
  }

  function fillRogue(e) {
    const newCards = []
    setCards(newCards)
    for (let index = 0; index < 9; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 6; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+2", drawn: false, lastDrawn: false }]
      })
    }
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "+3", drawn: false, lastDrawn: false }]
    })
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "+4", drawn: false, lastDrawn: false }]
    })
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "Crit", drawn: false, lastDrawn: false }]
    })
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "Dodge", drawn: false, lastDrawn: false }]
    })
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "Miss", drawn: false, lastDrawn: false }]
    })
  }

  function fillWizard(e) {
    const newCards = []
    setCards(newCards)
    for (let index = 0; index < 9; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+2", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1 fire", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1 lightning", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1 ice", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "Meditate", drawn: false, lastDrawn: false }]
      })
    }
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "Miss", drawn: false, lastDrawn: false }]
    })
  }

  function fillCleric(e) {
    const newCards = []
    setCards(newCards)
    for (let index = 0; index < 9; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+2", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+2", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "Bless", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "Prayer", drawn: false, lastDrawn: false }]
      })
    }
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "Miss", drawn: false, lastDrawn: false }]
    })
  }

  function fillFighter(e) {
    const newCards = []
    setCards(newCards)
    for (let index = 0; index < 5; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+1", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 5; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+2", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 5; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+3", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "+4", drawn: false, lastDrawn: false }]
      })
    }
    for (let index = 0; index < 2; index++) {
      setCards(prevCards => {
        return [...prevCards, { id: uuidv4(), name: "-2", drawn: false, lastDrawn: false }]
      })
    }
    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), name: "Miss", drawn: false, lastDrawn: false }]
    })
  }
  function drawCard() {
    if (cards.length === 0) {
      window.alert("you need a deck to draw from")
    } else {
      const newCards = [...cards]
      const undrawnCards = [...cards.filter(card => !card.drawn)]
      const rNumber = Math.floor(Math.random() * (undrawnCards.length - 0) + 0);
      drawnCard = undrawnCards[rNumber]
      if (drawnCard.drawn === false) {
        drawnCard.drawn = true
        for (let index = 0; index < newCards.length; index++) {
          newCards[index].lastDrawn = false
        }
        drawnCard.lastDrawn = true
      }
      if (drawnCard.name === "Miss") {
        for (let index = 0; index < newCards.length; index++) {
          newCards[index].drawn = false
        }
        window.alert("Your attack missed! Reshuffling your deck.");
      }
      setCards(newCards)

    }
  }
  return (
    <div className='container'>
      <DeckList cards={cards} toggleCard={toggleCard} />
      <div className='buttonStack1'>
      <input ref={designatedCard} placeholder="Your card here" type="text" />
      <button onClick={handleAddCard}>Add</button>
      <button onClick={handleClearCards}>Remove</button>
      <button onClick={handleReplaceCards}>Replace</button>
      </div>
      <div>{cards.length} cards in the deck</div>
      <div className='buttonStack2'>
        New deck:
      <button onClick={fillRogue}>Rogue</button>
      <button onClick={fillWizard}>Wizard</button>
      <button onClick={fillCleric}>Cleric</button>
      <button onClick={fillFighter}>Fighter</button>
      </div>
      <div>{Math.round(100 + (100 / (cards.length)) - cards.filter(card => !card.drawn).length * (100 / (cards.length)))}% chance to miss</div>
      <button onClick={drawCard}>Draw card</button>
    </div>
  )
}

export default App;
