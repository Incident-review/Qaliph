import './cardContainer.scss'
import { cardProps } from "./types/types"
import CardItem from './cardItem'

const AvaliableCards: React.FC<cardProps> = ({
    cards
}) => {
    return (
        <div className="outerContainer">
            <h1>Available Cards</h1>
            {
                cards.map((card, index) => {
                    return (
                        <CardItem key={index} card={card} />
                    )
                })
            }
        </div>
    )
}

export default AvaliableCards