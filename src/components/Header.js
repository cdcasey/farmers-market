import React from 'react';

export default function Header(props) {
  const numItems = props.cart.length || 0;

  return (
    <header className="header" data-testid="header-container">
      <h1>Frank's Farmer's Market</h1>
      <div className="header__right-nav">
        Number of items in cart
        <span className="header__notifier" data-testid="num-items">
          {numItems}
        </span>
      </div>
    </header>
  );
}
