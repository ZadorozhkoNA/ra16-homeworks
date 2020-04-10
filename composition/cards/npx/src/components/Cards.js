import React from 'react';
import Img from './Img';
import Content from './Content';
import data from './data';

export default function Cards() {
   
    return (
        <div className="card" style={{width: 250 +'px'}}>
            <Img src= {data[0].img} alt={data[0].title}/>
            <Content title={data[0].title}>{data[0].text}</Content>
        </div>
    )
}