import React from 'react';

import { inventory } from '../market';

export default function ItemList(props) {
  const items = Object.values(inventory).map((item) => {
    return (
      <tr key={item.code} data-testid="item">
        <td>{item.code}</td>
        <td>{item.name}</td>
        <td className="items__price">${item.price.toFixed(2)}</td>
        <td>
          {
            <button
              id={item.code}
              onClick={() => props.addItemToCart(item.code)}
              data-testid="add-button"
            >
              +
            </button>
          }
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
