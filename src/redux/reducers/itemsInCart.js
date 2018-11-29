import { inventory } from '../../market';

const initialState = [];

export const ADD_ITEM = 'add_item';

export default function itemsInCart(state = initialState, action) {
  const { id } = action.payload;
  switch (action.type) {
    case ADD_ITEM:
      return [...state, inventory[id]];
    default:
      return state;
  }
}
