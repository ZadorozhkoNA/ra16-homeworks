import React from 'react';
import './styl.css';

export default function Content(props) {

    return (
        <button href="#" className="btn btn-primary">{props.children}</button>
    )
}