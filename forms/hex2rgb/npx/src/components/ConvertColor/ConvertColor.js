import React, { Component } from 'react';
import './ConvertColor.css'

export class ConvertColor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            colorHEX: '',
            colorRGB: '',
        }
    }

    //Функция преобразования цвета, найдена на просторах Интернета и слегка доработана
    hex2rgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
         : 'Error';
    }

    //Обработка события
    handleChange = event => {
        event.preventDefault();

        let length = event.target.value.length;
        if ( length > 7 ) return 

        if ( length === 7) {
            let color = this.hex2rgb( event.target.value )
            this.setState( { 'colorRGB': color});
            let background = document.querySelector('.ConvertColor-background');

            if ( color && color !== 'Error' ) {
                background.style.backgroundColor = color;
                console.log( background.style.backgroundColor );
            }

            if ( color === 'Error' ) {
                background.style.backgroundColor = '';
            }
        }

        const name = event.target.name;
        this.setState( { [name]: event.target.value});

        // console.log ( this.state.colorHEX );
        // console.log ( event.target.value );
    }

    render() {
        return (
            <div className = 'ConvertColor-background'>
                <form className = 'ConvertColor-form'>
                    <label className = 'ConvertColor-form_label' htmlFor='colorHEX'>Color HEX
                        <input className = 'ConvertColor-form_input' id='hex' name='colorHEX' value={this.state.colorHEX} onChange={this.handleChange} />
                    </label>
                    <label className = 'ConvertColor-form_label' htmlFor='colorRGB'>Color RGB
                        <input className = 'ConvertColor-form_input' id='rgb' name='colorRGB' value={this.state.colorRGB} />
                    </label>
                </form>
            </div>
        )
    }
}

export default ConvertColor
