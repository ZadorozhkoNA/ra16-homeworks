import React from 'react'

export default function Widget(props) {
    return (
        <div>
            <div>{props.data.name}</div>
            <img src={props.data.img} alt='' />
            <span className='Widget-big'>{props.data.temp}</span>
            <div>{props.data.tempMorning}</div>
            <div>{props.data.tempDay}</div>
        </div>
    )
}
