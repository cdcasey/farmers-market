import itemsInCart, { ADD_ITEM } from './itemsInCart';

const state = [];
const action = {
  type: ADD_ITEM,
  payload: { id: 'CH1' }
};

xtest('itemsInCart reducer', () => {
  const newState = itemsInCart(state, action);
  console.log(newState);

  expect(false).toBe(true);
});
