import React, { useState, useEffect } from 'react';
import Card from './Card';
import { DeckContainer } from '../styled/DeckStyles';

function Deck() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://content.schwab.com/c2/UIE_codetest/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCards(data.cards);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <DeckContainer>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </DeckContainer>
  );
}

export default Deck;