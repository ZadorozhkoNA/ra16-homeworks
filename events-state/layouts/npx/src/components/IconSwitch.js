import React from 'react';

export default function IconSwitch ( props ) {

    return (
        <button onClick={props.onSwitch}>{props.icon}</button>
      )
}