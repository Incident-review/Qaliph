import { cardItemProps } from "./types/types";
import './types/cardItem.css'

const cardItem: React.FC<cardItemProps> = ({
card 
}) => {
    const {image, name, types, user: userEmail } = card;
    console.log('userEmail', userEmail)
    return (
        <div className="card">
            <div className="cardDetails">
                <img src={image} alt={name} className="cardImage" />
                <h3>{name}</h3>
                <p>
                    <span>Types:</span> {types.join(', ')}
                </p>
            </div>
        </div>
    )
    
}

export default cardItem