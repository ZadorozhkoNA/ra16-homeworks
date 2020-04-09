import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Table from './Table';
import Form from './Form';
import './style.css';

export default function Logic ()  {

    const [steps, setSteps] = useState([]);
    let flagUpdate = false; //Флаг запрещает запись после апгрейта

    //Апгрейт элемента если даты совпадают
    const updateArray = (array, searchDate, valueSteps) => {
        array.filter( item => {
            if (item['date'] === searchDate) {
                item['distans'] = Number(item['distans']) + Number(valueSteps);
                flagUpdate = true; //смена флага - запрет добавления

                setSteps(prevState => prevState.map(o => o.id === item.id ? item : o ));
            };
        });
    }

    //Преобразование даты (только для сортировки)
    const convertDate = ( date ) => {
        let arr = date.split('.');
        date = `20${arr[2]}-${arr[1]}-${arr[0]}`;
        return (Date.parse(date));
    }

    //Обработка массива
    const workArray = (event) => {
        event.preventDefault();
        let date = event.target['date'].value;
        let distans = event.target['distans'].value;
          
        let obj = {
                id: nanoid(),
                date: date,
                distans: Number(distans),
            }

        //Апгрейт элемента
        updateArray( steps, obj['date'], obj['distans'] );

        //Если не было апгрейта, то записать новый элемент
        if (!flagUpdate) {
            setSteps( prevState => [...prevState, obj]);
        }

        // Сортировка массива по дате
        setSteps( prevState => prevState.sort(function(a, b) {
            a = convertDate( a.date );
            b = convertDate( b.date );
            if (a > b ) return -1;
            if (a == b ) return 0;
            if (a < b ) return 1;
        } ));
    }

    //Удаление
    const delData = (event) => {
        event.preventDefault();
        let indexDel = event.target['del'].value;
        setSteps(prevSteps => prevSteps.filter(item => item.id !== indexDel));
    }

        return (     
            <div className = 'Table-background'>
                <div className = 'Table-box'> 
                    <Form funcSubmit = { workArray } /> 
                    <Table funcDel = { delData } state = {steps}/>
                </div>
            </div>
        );
}