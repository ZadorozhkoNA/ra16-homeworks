import React from 'react';
import Main from './components/Main';
import Logo from './components/Logo';
import './App.css';
import './components/styl.css';
import {topic, teg, forex, list, widget, logo} from './components/data';

function App() {
  return (
    <section className='App-flex'>
      <Logo logo={logo} /> 
      <Main topic={topic} teg={teg} forex={forex} list={list} widget={widget}/>
    </section>
  );
}

export default App;

//Краткое описание:
//
//Компоненты:
//      1. Logo - компонент логотипа 
//(возможно не самый удачный вариант выделения логотипа в отдельный компонент, выравнимвать будет трудно)
//      2. Main - собирает в себе все функциональные компоненты (рекламы нет)
//      3. Topic - универсальный компонент, выводит заголовки, теги и т.д. Если к данным приложен массив,
//то может выводить содержание массива спском.
//      4. UnorderList - универсальный компонент, выводит списки. Может использоваться внутри компонента Topic
//для вывода списка, может использоваться самостоятельно если указать заголовок списка.
//      5. ListItem - компонент формирования элемента списка.
//      6. Form - компонент формы ввода (не универсальный)
//      7. Widget - компонент виджита погоды (не универсальный)
//
//Файлы:
//      1. styl.css - бедненький набор стилей
//      2. data.js - исходные данные:
//          2.1 logo - данные для логотипа, компонент Logo
//          2.2 widget - данные для виджита погоды, компонент Widget
//          2.3 list - данные для вывода списка через компонент UnorderList, объект используется несколько раз для демонстрации
//          2.4 forex - данные курса валют, используется для компонента Topic
//          2.5 teg - список тегов, используется для компонента Topic
//          2.6 topic - список тем, к каждой теме приложен массив данных, используется для Topic. 
//Вложенный массив используется для UnorderList внутри компонента Topic
//