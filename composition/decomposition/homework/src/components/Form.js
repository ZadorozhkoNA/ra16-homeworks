import React from 'react'

export default function Form() {
    return (
        <form className='Form-form' onSubmit={(event) => console.log(event)}>
            <label>
                <input type='text'></input>
            </label>
            <button>Найти</button>
        </form>
    )
}
