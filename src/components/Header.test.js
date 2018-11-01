import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Header from './Header';

afterAll(cleanup);

const cart = [{ name: 'item1', price: 0 }];

test('<Header />', () => {
    const { debug, getByTestId } = render(<Header cart={cart} />);
    expect(Number(getByTestId('num-items').textContent)).toBe(cart.length);
    // debug();
});
