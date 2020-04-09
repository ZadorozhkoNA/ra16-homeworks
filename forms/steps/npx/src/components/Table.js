import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {
    constructor (props) {
        super (props);
    }

    //Заголовок таблицы
    headerTable = () => {

        return (
            <tr>
                <td>Дата</td><td>Пройдено, км</td><td>Действие</td>
            </tr>
        )       
    }

    //Тело таблицы
    bodyTable = (data = {}) => {
        if (data === {}) return;
        return (
            <tr className = 'Table-list-row' key = {data.id}>
                <td>{data.date}</td>
                <td>{data.distans}</td>
                <td>
                    <form onSubmit = {this.props.funcDel}>
                        <input type = 'hidden' name = 'del' value = {data.id}/>
                        <button className = 'Table-form-output_button'>Удалить</button>
                    </form>
                </td>
            </tr>
        )
    }
    
    // Прошу обратить внимание. что поля ввода не проверяют корректность данных, 
    // по этому вводить данные нужно в соответствии с шаблоном.
    // Дата в формате ДД.ММ.ГГ, дистанцию в км, десятичные дроби разделяются точкой.

    render() {
        return (
            <table className = 'Table-list'>
                <thead>
                    {this.headerTable()}
                </thead>
                <tbody>
                    {this.props.state.map( (item)=> this.bodyTable(item))}
                </tbody>
            </table>
        )
    }
}
