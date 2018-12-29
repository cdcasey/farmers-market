import React, { Component } from 'react';

import Header from './components/HeaderContainer';
import ItemTable from './components/ItemTable';
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
          {/* <ItemTable add={addItemToCart} /> */}
          <ItemTable />
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
