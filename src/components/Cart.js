import React, { Component } from 'react';

import RemoveButton from './RemoveButton';
import { specials, applySpecials } from '../market';

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cart, removeItem } = this.props;

        if (!cart || cart.length < 1) return <h2>Your cart is empty</h2>;

        const updatedCart = applySpecials(cart);
        const items = updatedCart.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.code}</td>
                    <td className="items__price">${item.price.toFixed(2)}</td>
                    <td>
                        {specials.hasOwnProperty(item.code) ? (
                            ''
                        ) : (
                            <RemoveButton
                                remove={removeItem}
                                cartIndex={item.cartIndex}
                            />
                        )}
                    </td>
                </tr>
            );
        });
        const total = updatedCart.reduce((acc, cur) => {
            return acc + cur.price;
        }, 0);

        return (
            <React.Fragment>
                <h2>Cart</h2>
                <table data-testid="cart">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                        <tr>
                            <td />
                            <td className="items__price" data-testid="total">
                                ${total.toFixed(2)}
                            </td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
