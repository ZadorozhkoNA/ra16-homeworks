import React from 'react';


//Универсальный элемент списка
//Предполагаемая структура данных:

// const data = {
//     id: 'id' //индекс
//     url: 'url' //ссылка на страницу
//     img: 'url', //ссылка на изображение
//     contentNormal: 'text_normal', //Нормальный текст
//     contentBloat: 'text_bloat', //Жирный текст
//     contentFaded: 'text_faded', //Серый текст
// }

export default function ItemElement (props) {
    const data = props.data;
    return (
        <li key = {data.id}>
            <a href = {data.url}>
                <span>{data.img}</span>
                <span>{contentBloat}</span>
                <span>{contentNormal}</span>
                <span>{contentFaded}</span>
            </a>
        </li>
    )
}