import { inventory } from '../../market';
import { ADD_ITEM, REMOVE_ITEM } from '../actionTypes';

const initialState = [];

export default function itemsInCart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const { id } = action.payload;
      const cartIndex = state.length;
      return [...state, { ...inventory[id], cartIndex }];

    case REMOVE_ITEM:
      const itemsInCart = state.filter(
        (item, i) => i !== Number(action.payload.cartIndex)
      );
      return itemsInCart;

    default:
      return state;
  }
}
