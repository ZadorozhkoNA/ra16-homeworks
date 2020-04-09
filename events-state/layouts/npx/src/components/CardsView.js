import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView ( props ) {
    const data = props.props;    
    return (
        <div className = 'cardsView-box'>
            {data.map((item) => <ShopCard props = {item} /> )}
        </div>
    );
}