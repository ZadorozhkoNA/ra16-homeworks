import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick = {this.props.func}>OK</button>
        )
    }
}
