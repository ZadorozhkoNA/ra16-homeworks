import React, {Component} from 'react';

export default class Form extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <form className='Form-input' id='forma' onSubmit={this.props.funcSubmit}>
                <label className='Form-input_label' htmfor='date'>Дата, ДД.ММ.ГГ
                    <input className='Form-input_input' name='date'/>
                </label>
                <label className='Form-input_label' htmlform='distans'>Дистанция, км
                    <input className='Form-input_input' name='distans' />
                </label>
                <button className='Form-input_button'>ОК</button>
            </form>
        )
    }
}
