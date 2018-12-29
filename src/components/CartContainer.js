import { connect } from 'react-redux';

import Cart from './Cart';
import { removeItemFromCart } from '../redux/actions';

function mapStateToProps(state) {
  return { cart: state.itemsInCart };
}

export default connect(
  mapStateToProps,
  { removeItemFromCart }
)(Cart);
