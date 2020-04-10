import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';
import PropTypes from 'prop-types';

export default function Store (props) {
    const [icon, setIcon] = useState( 'view_list' );
    const products = props.products;

    const handleClick = event => {
        event.preventDefault();
        setIcon(prevState => prevState === 'view_list' ? 'view_module' : 'view_list' )
        };
    

    return (
        <div className = 'store-box' >
            <IconSwitch icon={icon} onSwitch={handleClick}/>
            {icon === 'view_list' ? <CardsView products={products}/> : <ListView products = {products} />}       
        </div>
    );
}

Store.propTypes = {
    products: PropTypes.array.isRequired
  }