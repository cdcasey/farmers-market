import { connect } from 'react-redux';
import Header from './Header';

function mapStateToProps(state) {
  return { cart: state.itemsInCart };
}

export default connect(
  mapStateToProps,
  null
)(Header);
