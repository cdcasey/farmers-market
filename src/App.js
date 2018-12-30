import React, { Component } from 'react';

import Header from './components/HeaderContainer';
import ItemTableContainer from './components/ItemTableContainer';
import CartContainer from './components/CartContainer';

import { inventory } from './market';

export function App(props) {
  const state = {
    itemsInCart: []
  };

  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div className="container__tables">
          {/* <ItemTableContainer add={addItemToCart} /> */}
          <ItemTableContainer />
          <div>
            <CartContainer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  // }
}

export default App;
