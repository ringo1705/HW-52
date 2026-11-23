import Card from './Card';

class PokerHand {
    public pokerCards: Card[] = [];

    constructor(cards: Card[]) {
        this.pokerCards = cards;
    }

    getOutcome(): string {
        let counter = 0;
        let threeCounter = 0;

        for (let i = 0; i < this.pokerCards.length; i++) {
            const rank = this.pokerCards[i].rank;
            const sameCards = this.pokerCards.filter(card => card.rank === rank);

            if (sameCards.length === 2) {
                counter++;
            } else if (sameCards.length === 3) {
                threeCounter++;
            }
        }

        const suit = this.pokerCards[0].suit;
        const sameSuits = this.pokerCards.filter(card => card.suit === suit);

        const result = counter / 2
        const resultThree = threeCounter / 3;

        if (sameSuits.length === 5) {
            return "Flush"
        } else if (resultThree === 1) {
            return "Three of a kind"
        } else if (result === 2) {
            return "Two pairs"
        } else if (result === 1) {
            return "One pair"
        } else {
            return "High card";
        }
    }
}

export default PokerHand

