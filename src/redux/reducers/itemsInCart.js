import { inventory } from '../../market';
import { ADD_ITEM } from '../actionTypes';

const initialState = [];

export default function itemsInCart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const { id } = action.payload;
      const cartIndex = state.length;
      return [...state, { ...inventory[id], cartIndex }];
    default:
      return state;
  }
}
