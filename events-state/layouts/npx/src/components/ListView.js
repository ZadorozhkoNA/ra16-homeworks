import React from 'react';
import ShopItem from './ShopItem';

export default function ListView( props ) {
    const data = props.props; 
    return (
        <table  className = 'listView-table'>
            {data.map((item) => <ShopItem props = {item} />)}
        </table>
    );
}