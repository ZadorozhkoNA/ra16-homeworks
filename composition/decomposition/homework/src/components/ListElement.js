import React from 'react';
import ItemElement from './ItemElement';

//Универсальный список
//Предполагаемая структура данных:

// const data = {
//     id: 'id', //индекс
//     url: 'url', //ссылка на страницу
//     img: 'url', //ссылка на изображение
//     title: 'title', // Заголовок списка
//     liItems: [ //Данные для каждого элемента списка
//         {...},
//         {...},
//     ],
// }

export default function ListElement(props) {
    const items = props.data.liItems.map( item => {
        <ItemElement data= {item} />
    } );

    const title = <a href = {data.url} >
        <span>{data.img}</span>
        <span>{data.title}</span>
    </a>

    return (
        <div>
            <div>{title}</div>
            <ul>{items}</ul>
        </div>
    );
}