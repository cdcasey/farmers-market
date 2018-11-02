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

    removeItemFromCart(event) {
        const { cartIndex } = event.target.dataset;

        const itemsInCart = this.state.itemsInCart.filter(
            (item, i) => i !== Number(cartIndex)
        );

        this.setState((state) => ({
            itemsInCart
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <Header cart={this.state.itemsInCart} />
                    <div className="container__tables">
                        <ItemTable add={this.addItemToCart.bind(this)} />
                        <div>
                            <Cart
                                cart={this.state.itemsInCart}
                                removeItem={this.removeItemFromCart.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
