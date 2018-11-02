import React, { Component } from 'react';

import Header from './components/Header';
import ItemTable from './components/ItemTable';
import Cart from './components/Cart';

import { inventory } from './market';

class App extends Component {
    state = {
        itemsInCart: []
    };

    addItemToCart(event) {
        const { id } = event.target;
        this.setState((state) => ({
            itemsInCart: [...state.itemsInCart, inventory[id]]
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Header cart={this.state.itemsInCart} />
                <ItemTable add={this.addItemToCart.bind(this)} />
                <Cart
                    cart={this.state.itemsInCart}
                    remove={this.removeItemFromCart.bind(this)}
                />
            </React.Fragment>
        );
    }
}

export default App;
