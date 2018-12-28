import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../redux/actions';

function AddButton(props) {
  console.log('BUTTON PROPS', props);

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
