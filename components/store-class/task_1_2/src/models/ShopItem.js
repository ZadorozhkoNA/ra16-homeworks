export default class ShopItem {
    constructor ( shopItem ) {
        Object.assign( this, {
            brand: '',
            title: '',
            description: '',
            descriptionFull: '',
            price: 0,
            currency: '£' 
        }, shopItem );
    }
}