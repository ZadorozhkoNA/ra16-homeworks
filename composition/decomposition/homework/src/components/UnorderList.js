import React from 'react';
import ListItem from './ListItem';

export default function UnorderList(props) {

    const topic = (string = '') => {
        if (string === '') return;
        return (
            <div>{string}</div>
        );
    }
    return (
        <div>
            {topic(props.topic)}
            <ul>
                {props.data.map((item, index)=>
                    <ListItem key={index}>{item}</ListItem>
                )}
            </ul>
        </div>
    )
}
