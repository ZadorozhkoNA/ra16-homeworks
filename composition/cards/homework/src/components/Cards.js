import React from 'react';
import PropeTypes from 'prop-types';
import './styl.css';

export default function Cards(props) {
    return (
        <div className="card" style={{width: 250 +'px'}}>
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <button href="#" className="btn btn-primary">{props.btnText}</button>          
            </div>
        </div>
    )
}

Cards.PropeTypes = {
    title: PropeTypes.string.isRequired,
    content: PropeTypes.string.isRequired,
    btnText: PropeTypes.string.isRequired,
    children: PropeTypes.string,
}