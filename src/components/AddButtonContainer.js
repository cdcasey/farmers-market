import { connect } from 'react-redux';

import AddButton from './AddButton';
import { addItemToCart } from '../redux/actions';

export default connect(
  null,
  { addItemToCart }
)(AddButton);
