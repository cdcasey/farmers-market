import React, { Component } from 'react';

import AddButton from './AddButton';
import { inventory } from '../market';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = Object.values(inventory).map((item) => {
            return (
                <tr key={item.code} data-testid="item">
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td className="items__price">${item.price.toFixed(2)}</td>
                    <td>
                        {<AddButton code={item.code} add={this.props.add} />}
                    </td>
                </tr>
            );
        });

        return (
            <table data-testid="market-items">
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}
