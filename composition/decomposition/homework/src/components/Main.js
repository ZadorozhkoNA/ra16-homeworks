import React from 'react';
import Topic from './Topic';
import Form from './Form';
import UnorderList from './UnorderList';
import Widget from './Widget';

export default function Main(props) {
    return (
        <div className='Main-conteiner'>
            <Topic>{props.topic}</Topic>
            <Topic>{props.forex}</Topic>
            <Topic>{props.teg}</Topic>
            <Form />
            <div className='Main-box'>
                <Widget data={props.widget} />
                <UnorderList topic={props.list.name} data={props.list.data} />
                <UnorderList topic={props.list.name} data={props.list.data} />
            </div>
        </div>
    )
}
