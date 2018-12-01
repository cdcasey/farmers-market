import { ADD_ITEM } from './actionTypes';

export function addItemToCart(itemId) {
  return {
    type: ADD_ITEM,
    payload: { id: itemId }
  };
}
