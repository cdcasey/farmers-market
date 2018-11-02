import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Cart from './Cart';

afterEach(cleanup);

test('<Cart /> should render', () => {
    const { debug, getByTestId } = render(<Cart />);
    // expect(Number(getByTestId('num-items').textContent)).toBe(cart.length);
    // debug();
});
