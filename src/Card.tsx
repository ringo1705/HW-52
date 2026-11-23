
import './cards.css';

interface Props {
    rank: string;
    suit: string;
}

const Card = (props: Props) => {
    const cardClasses = `card rank-${props.rank} ${props.suit}`;

    let symbol = "";

    if (props.suit === "diams") {
        symbol = "♦";
    } else if (props.suit === "hearts") {
        symbol = "♥";
    } else if (props.suit === "clubs") {
        symbol = "♣";
    } else if (props.suit === "spades") {
        symbol = "♠";
    }

    return (
        <span className={cardClasses}>
            <span className="rank">{props.rank.toUpperCase()}</span>
            <span className="suit">{symbol}</span>
        </span>
    );
};

export default Card;
