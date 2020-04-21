import React from 'react';
import Cards from './components/Cards'
import data from './components/data';

export default function App() {
  return (
    data.map((item, index) => 
      <Cards key={index} title={item.title} content={item.text} btnText={item.button}>{item.img}</Cards>
    )
  );
}
