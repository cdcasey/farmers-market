import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="container" data-testid="header-container">
                <h1>Frank's Farmer's Market</h1>
                <div>Go to cart</div>
            </header>
        );
    }
}
