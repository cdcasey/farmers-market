import { connect } from 'react-redux';

import RemoveButton from './RemoveButton';
import { removeItemFromCart } from '../redux/actions';

export default connect(
  null,
  { removeItemFromCart }
)(RemoveButton);
