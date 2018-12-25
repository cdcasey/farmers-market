import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../redux/actions';

function RemoveButton(props) {
  return (
    <button
      data-cart-index={props.cartIndex}
      onClick={props.remove}
      data-testid="remove-button"
    >
      -
    </button>
  );
}

export default connect(
  null,
  { removeItemFromCart }
)(RemoveButton);
