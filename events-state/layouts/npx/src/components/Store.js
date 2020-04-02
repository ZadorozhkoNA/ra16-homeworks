import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
// import ShopItem from './ShopItem'
import ShopCard from './ShopCard';
// import ListView from './ListView'
import CardsView from './CardsView';
import { products } from './data';
// import PropTypes from 'prop-types'

export default class Store extends Component {
    constructor ( props ) {
        super ( props )
        this.state = {
            icon: 'view_list'
          }
    }
    
    switch = () => {
        this.state.icon === "view_list" ? this.setState({icon: "view_module"}) : this.setState({icon: "view_list"})
    }

    render() {
        return (
            <div>
                <IconSwitch icon={this.state.icon} onSwitch={this.switch} />
                <CardsView cards={products} />
                {/* <CardsView cards={<ShopCard products={products}/>} /> */}
             
            </div>
        );
    }
}

