import React from 'react';

import { specials, applySpecials } from '../market';

export default function Cart(props) {
  const { cart } = props;

  if (!cart || cart.length < 1) return <h2>Your cart is empty</h2>;

  const updatedCart = applySpecials(cart);
  const items = updatedCart.map((item, i) => {
    return (
      <tr key={i}>
        <td
          className={
            specials.hasOwnProperty(item.code) ? 'cart__special' : 'cart__item'
          }
        >
          {item.code}
        </td>
        <td className="items__price">${item.price.toFixed(2)}</td>
        <td>
          {specials.hasOwnProperty(item.code) ? (
            ''
          ) : (
            <button
              data-cart-index={item.cartIndex}
              onClick={props.removeItemFromCart}
              data-testid="remove-button"
            >
              -
            </button>
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
      {/* <h2>Cart</h2> */}
      <table className="cart" data-testid="cart">
        <thead>
          <tr>
            <th className="cart__item-header">Item</th>
            <th className="cart__price-header">Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items}
          <tr className="total-row">
            <td className="total" />
            <td className="items__price total" data-testid="total">
              ${total.toFixed(2)}
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
