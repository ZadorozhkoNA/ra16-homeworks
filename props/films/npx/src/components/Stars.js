import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

export default function Stars (props) {
    const {count} = props;
    let flag = false;
    (count >= 1 && count <= 5 && Number.isInteger(count)) && (flag = true);

    const listItemArray = Array.from({ length: count }, (v, k) => k);
    const listItemDOM = listItemArray.map( (item, index) => <li key = {index}> <Star /> </li>)

     return (

           flag && (<ul className='card-body-stars u-clearfix'>
                {listItemDOM}
            </ul>)

     )
}

Stars.propTypes = {
    props: PropTypes.number
}