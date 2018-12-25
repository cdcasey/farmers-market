import React, { Component } from 'react';

import Header from './components/Header';
import ItemTable from './components/ItemTable';
import Cart from './components/Cart';

import { inventory } from './market';

export function App(props) {
  const state = {
    itemsInCart: []
  };

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
