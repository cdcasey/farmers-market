import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, fireEvent } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

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

test('<App /> should update the items in cart when a button is clicked', () => {
    const { debug, getByTestId, getAllByTestId } = render(<App />);
    const addButton = getAllByTestId('add-button')[0];
    const headerNotifier = getByTestId('num-items');

    expect(headerNotifier.textContent).toBe('0');

    fireEvent.click(addButton);
    expect(headerNotifier.textContent).toBe('1');
    // debug();
});
