import React from 'react';

export default function AddButton(props) {
  console.log('BUTTON', props);

  return (
    <button
      id={props.code}
      onClick={() => props.addItemToCart(props.code)}
      data-testid="add-button"
    >
      +
    </button>
  );
}
