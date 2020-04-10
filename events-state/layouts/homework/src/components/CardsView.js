import React from 'react';
import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

export default function CardsView ( props ) {
    const data = props.products;    
    return (
        <div className = 'cardsView-box'>
            {data.map((item) => <ShopCard objItem = {item} /> )}
        </div>
    );
}

CardsView.propTypes = {
    products: PropTypes.array.isRequired
  }