import React from 'react';

export default function ShopCard ( props ) {

    let arrayProducts = props.map( (item, index) => 
        <div key={index}>
          <img alt={item.name} src={item.img} />
          <div>
            <h2>{item.name}</h2>
            <p>{item.color}</p>
          </div>
          <div>                    
            <p>${item.price}</p>
            <button>Add to card</button>
           </div>
        </div> 
    );

    return (
        <div> {arrayProducts} </div>
      );
};