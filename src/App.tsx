
import './App.css';
import { useState } from 'react';
import Card from './Card';
import CardModel from './lib/Card';
import CardDeck from './lib/CardDeck';

const App = () => {
    const [cards, setCards] = useState<CardModel[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        setCards(deck.getCards(5));
    };

    if (cards.length === 0) {
        return (
            <div>
                <button onClick={dealCards}>Раздать карты</button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={dealCards}>Раздать карты</button>

            <div className="playingCards faceImages">
                <Card rank={cards[0].rank} suit={cards[0].suit} />
                <Card rank={cards[1].rank} suit={cards[1].suit} />
                <Card rank={cards[2].rank} suit={cards[2].suit} />
                <Card rank={cards[3].rank} suit={cards[3].suit} />
                <Card rank={cards[4].rank} suit={cards[4].suit} />
            </div>
        </div>
    );
};

export default App;
