import React, { Component } from 'react'
import FormTimes from './FormTimes';
import Watches from './Watches';
import {nanoid} from 'nanoid';

export default class CreateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayWatches: [],
        }
    }

    handleDel = (event) => {
        event.preventDefault();
        console.log(event.target)
        const id = event.target.del.value
        this.setState(prevState => ({
            arrayWatches: [...prevState.arrayWatches].filter(item => item.id !== id)
        } ))
    }

    handleTime = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const obj={};
        for(let [name, value] of formData) {
            obj[name] = value
          }
        obj.id = nanoid();

        this.setState(prevState => ({
            arrayWatches: [...prevState.arrayWatches, obj]
        } ))
    }

    render() {
        return (
            <div>
                <FormTimes funcSubmit={this.handleTime} />
                {this.state.arrayWatches.map( item => <Watches funcDel={this.handleDel} UTC = {item} /> )}
            </div>
        )
    }
}
