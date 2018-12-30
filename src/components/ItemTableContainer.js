import { connect } from 'react-redux';

import ItemTable from './ItemTable';
import { addItemToCart } from '../redux/actions';

export default connect(
  null,
  { addItemToCart }
)(ItemTable);
