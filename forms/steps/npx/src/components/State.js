import React, { Component } from 'react';
import Form from './Form';
import {nanoid} from 'nanoid';

export default class State extends Component {
    constructor (props) {
        super(props);
        this.state = {
            arrayvar: [],
        };
    }

    addArray = (event) => {
        event.preventDefault();
        let obj = {
            id: nanoid(),
            val: 1,
        }


        this.setState(prevState => ({
            arrayvar: [...prevState.arrayvar, obj]
          }));

        console.log( this.state.arrayvar );
    }

    render() {
        return (
            <Form func = { this.addArray } />
        )
    }
}
