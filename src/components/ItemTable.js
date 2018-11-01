import React, { Component } from 'react';
import _ from 'lodash';

import AddButton from './AddButton';
import { inventory } from '../market';

export default class ItemList extends Component {
    render() {
        const items = _.values(inventory).map((item) => {
            return (
                <tr key={item.code} data-testid="item">
                    <td>{item.name}</td>
                    <td className="items__price">${item.price.toFixed(2)}</td>
                    <td>{<AddButton />}</td>
                </tr>
            );
        });

        return (
            <table data-testid="market-items">
                <thead>
                    <tr>
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
