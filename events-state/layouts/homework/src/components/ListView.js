import React from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

export default function ListView( props ) {
    const data = props.products; 
    return (
        <table  className = 'listView-table'>
            {data.map((item) => <ShopItem objItem = {item} />)}
        </table>
    );
}

ListView.propTypes = {
    products: PropTypes.array.isRequired
  }