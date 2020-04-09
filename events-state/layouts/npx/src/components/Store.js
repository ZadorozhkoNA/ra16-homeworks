import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default function Store (props) {
    const [icon, setIcon] = useState( 'view_list' );
    let products = props.props;

    const handleClick = event => {
        event.preventDefault();
        setIcon(prevState => prevState === 'view_list' ? 'view_module' : 'view_list' )
        };
    

    return (
        <div className = 'store-box' >
            <IconSwitch icon={icon} onSwitch={handleClick}/>
            {icon === 'view_list' ? <CardsView props={products}/> : <ListView props = {products} />}       
        </div>
    );
}