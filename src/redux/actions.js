import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export function addItemToCart(itemId) {
  return {
    type: ADD_ITEM,
    payload: { id: itemId }
  };
}

export function removeItemFromCart(event) {
  const { cartIndex } = event.target.dataset;

  return {
    type: REMOVE_ITEM,
    payload: { cartIndex }
  };
}
