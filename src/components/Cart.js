import React, { Component } from 'react';

import RemoveButton from './RemoveButton';

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cart, removeItem } = this.props;
        console.log(this.props);

        if (!cart || cart.length < 1) return <h2>Your cart is empty</h2>;

        const items = cart.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.code}</td>
                    <td className="items__price">${item.price.toFixed(2)}</td>
                    <td>
                        <RemoveButton remove={removeItem} cartIndex={i} />
                    </td>
                </tr>
            );
        });
        const total = cart.reduce((acc, cur) => {
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
                            <td className="items__price">
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
