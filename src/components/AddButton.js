import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../redux/actions';

function AddButton(props) {
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

export default connect(
  null,
  { addItemToCart }
)(AddButton);
