import React from 'react';

export default function RemoveButton(props) {
  return (
    <button
      data-cart-index={props.cartIndex}
      onClick={props.removeItemFromCart}
      data-testid="remove-button"
    >
      -
    </button>
  );
}
