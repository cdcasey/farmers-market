import itemsInCart from './itemsInCart';
import { ADD_ITEM } from '../actionTypes';

const state = [];
const action = {
  type: ADD_ITEM,
  payload: { id: 'CH1' }
};

test('itemsInCart reducer', () => {
  const newState = itemsInCart(state, action);
  console.log(newState);

  expect(newState).toEqual([
    { cartIndex: 0, code: 'CH1', name: 'Chai', price: 3.11 }
  ]);
});
