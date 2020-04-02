import React from 'react';

export default function Listing ( data ) {

    //Удалить ошибочный элемент
    const dataUse = data.data.filter(item => item.MainImage !== undefined )
    
    //Обрезать строку 
    const lengthText = (text) => {
        if (text.length > 50) return `${text.slice(0 ,50)}...`
        return text
    }

    //Вид цены
    const priceView = ( price, currency ) => {
        if ( currency === 'USD' ) return `$${price}`
        if ( currency === 'EUR' ) return `€${price}`
        return `${price} ${currency}`
    }

    //Подсветка остатка
    const quantityIllumination = (quantity) => {
        if ( quantity <= 10 ) return 'item-quantity level-low'
        if ( quantity <= 20  && quantity > 10 ) return 'item-quantity level-medium'
        return 'item-quantity level-high'
    }

    //Формирование карточек
    let arrayItems = [];
    arrayItems = dataUse.map( item => 

        <div className="item" key = {item.listing_id}>
            <div className="item-image" >
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{lengthText(item.title)}</p>
                <p className="item-price"> {priceView (item.price, item.currency_code)}</p>
                <p className= {quantityIllumination(item.quantity)}  > {item.quantity} left</p>
            </div>
        </div>
    )

    return (
        <div className="item-list" >
            {arrayItems}
        </div>
    );
}