import React from 'react';

export default function IconSwitch( props ) {
    return (
        <button className='iconSwitch-button' onClick={props.onSwitch}>
            <span className="material-icons">
                {props.icon}
            </span>
        </button>
    );
}