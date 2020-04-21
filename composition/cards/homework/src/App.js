import React from 'react';
import Cards from './components/Cards'
import data from './components/data';

export default function App() {
  return (
    <>
      <Cards title={data.title} content={data.text} btnText={data.button}>
        <img src={data.img} className="card-img-top" alt={''}/>
      </Cards>

      <Cards title={data.title} content={data.text} btnText={data.button} />
    </>
    )
}
