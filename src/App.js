import React, { Component } from 'react';

import Header from './components/Header';
import ItemTable from './components/ItemTable';
import Cart from './components/Cart';

import { inventory } from './market';

class App extends Component {
    state = {
        cart: []
    };

    addToCart(event) {
        this.setState({
            cart: [...this.state.cart, inventory[event.target.id]]
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header cart={this.state.cart} />
                <ItemTable add={this.addToCart.bind(this)} />
                <Cart cart={this.state.cart} />
            </React.Fragment>
        );
    }
}

export default App;
