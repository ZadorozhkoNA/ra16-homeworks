import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard ( props ) {
    const data = props.objItem
    return (
        <div className = 'shopCard-box'>
            <div class = 'shopCard-name'>
                {data.name}
            </div>
            <div class = 'shopCard-color'>
                {data.color}
            </div>
            <img className = 'shopCard-img' src = {data.img} alt = {data.name} />
            <div className = 'shopCard-footer'>
                <div className = 'shopCard-price'>{`$${data.price}`}</div>
                <button className = 'shopCard-button'>Add to cart</button>
            </div>
        </div>
    );
}

ShopCard.propTypes = {
    objItem: PropTypes.object.isRequired
  }