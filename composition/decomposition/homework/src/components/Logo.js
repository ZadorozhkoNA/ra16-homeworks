import React from 'react'

export default function Logo(props) {
    return (
        <div className='Logo-container'>
            <a href={props.logo.url}>
                <img src={props.logo.img} alt='Логотип' />
            </a>
        </div>
    )
}
