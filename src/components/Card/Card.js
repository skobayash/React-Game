import React from 'react';
import './Card.css';

const Card = props => (
    <div className='card border-dark mb-3' onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.id} src={props.image} />
        </div>
    </div>
)



export default Card;