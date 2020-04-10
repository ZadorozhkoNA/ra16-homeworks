import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';


export default function ShopItem (props) {
    const data = props.objItem;
    return (
            <tr key = {nanoid()}>
            <td key = {nanoid()} className = 'shopItem-cell_img cell'>
                <img className = 'shopItem-img' src = {data.img} alt = {data.name} />
            </td>
            <td key = {nanoid()} className = 'shopItem-cell_name cell'>
                {data.name}
            </td>
            <td key = {nanoid()} className = 'shopItem-cell_color cell'>
                {data.color}
            </td>
            <td key = {nanoid()} className = 'shopItem-cell_price cell'>
                {`$${data.price}`}
            </td>
            <td key = {nanoid()} className = 'cell'>
            <   button className = 'shopItem-cell_button'>Add to cart</button>
            </td>
        </tr>
    );
}

ShopItem.propTypes = {
    objItem: PropTypes.object.isRequired
  }