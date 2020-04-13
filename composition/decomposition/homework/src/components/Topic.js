import React, { useState } from 'react'
import UnorderList from './UnorderList';

export default function Topic(props) {
    const [topicActiv, setTopicActiv] = useState(0);
    const activ = (index) => {
        setTopicActiv(prevActiv => index );
    }

    const topicStyle = (state, index) => {
        return state === index ? 'Topic-listItem Topic-listItem_bold' : 'Topic-listItem'
    }

    const topicItemsList = (array = []) => {
        if (array === []) return;
        return (
            <UnorderList topic={''} data={array}/>
        );

    }

    return (
        <section>
            <ul className='Topic-unorderList'>
                {props.children.map( (item, index) => {
                    return <li className={topicStyle(topicActiv, index)} key={index} onClick={()=>activ(index)}>
                        <a href={item.url}>{item.name}</a>{item.rateOfCurrency}{item.change}
                    </li>
                } )}
            </ul> 
            {topicItemsList(props.children[topicActiv].list)}          
        </section>
    )
}
