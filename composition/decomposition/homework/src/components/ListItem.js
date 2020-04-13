import React from 'react';

export default function ListItem(props) { 
    
    const marginItem = (string) => {
        return string === '' ? 'ListItem-margin' : '';
    }

    const iconItem = (string = '') => {
        if (string === '') return;
        return (
            <img className='ListItem-img' src={string} alt={''} />
        );
    }

    return (
        <li className='ListItem-li'>
            <a href={props.children.url} className={marginItem(props.children.img)}>
                {iconItem(props.children.img)}
                {props.children.name}
            </a>
        </li>
    );
}
