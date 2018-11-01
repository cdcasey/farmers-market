import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numItems = this.props.cart.length || 0;

        return (
            <header className="container" data-testid="header-container">
                <h1>Frank's Farmer's Market</h1>
                <div className="header__right-nav">
                    Go to cart
                    <span className="header__notifier" data-testid="num-items">
                        {numItems}
                    </span>
                </div>
            </header>
        );
    }
}
