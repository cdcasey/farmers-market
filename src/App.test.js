import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from 'react-testing-library';
import App from './App';

afterAll(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('<App /> should have a header', () => {
    const { debug, getByTestId } = render(<App />);
    expect(getByTestId('header-container')).toBeTruthy();
    // debug();
});

test('<App /> should have a list of items for sale', () => {
    const { debug, getByTestId } = render(<App />);
    expect(getByTestId('market-items')).toBeTruthy();
    // debug();
});
