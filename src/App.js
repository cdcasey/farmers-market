import React from 'react';

import Header from './components/HeaderContainer';
import ItemTableContainer from './components/ItemTableContainer';
import CartContainer from './components/CartContainer';

export function App(props) {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div className="container__tables">
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
