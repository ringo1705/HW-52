import Card from './Card';

class CardDeck {
    public cardDeck: Card[] = [];
    private suites: string[] = ["diams", "hearts", "clubs", "spades"];
    private ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

    constructor() {
        for (let i = 0; i < this.suites.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                const Cards = new Card(this.ranks[j], this.suites[i]);
                this.cardDeck.push(Cards);
            }
        }
    }

    getCard(): Card {
        const random = Math.floor(Math.random() * this.cardDeck.length);
        return this.cardDeck.splice(random, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const selectedCards: Card[] = [];

        for (let i = 0; i < howMany; i++) {
          selectedCards.push(this.getCard());
        }
        return selectedCards;
    }
}

export default CardDeck;

