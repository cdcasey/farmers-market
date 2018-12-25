import React, { Component } from 'react';

import Header from './components/Header';
import ItemTable from './components/ItemTable';
import Cart from './components/Cart';

import { inventory } from './market';

export function App(props) {
  const state = {
    itemsInCart: []
  };

  // const { addItemToCart } = props;

  // addItemToCart(event) {
  //   const { id } = event.target;
  //   this.setState((state) => ({
  //     itemsInCart: [...state.itemsInCart, inventory[id]]
  //   }));
  // }

  function removeItemFromCart(event) {
    const { cartIndex } = event.target.dataset;

    const itemsInCart = state.itemsInCart.filter(
      (item, i) => i !== Number(cartIndex)
    );

    this.setState((state) => ({
      itemsInCart
    }));
  }

  // render() {
  console.log('PROPS', props);

  return (
    <React.Fragment>
      <div className="container">
        <Header cart={state.itemsInCart} />
        <div className="container__tables">
          {/* <ItemTable add={addItemToCart} /> */}
          <ItemTable />
          <div>
            <Cart cart={state.itemsInCart} removeItem={removeItemFromCart} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  // }
}

export default App;
