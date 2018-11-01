import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Header from './Header';

afterAll(cleanup);

test('<Header />', () => {
    const { debug } = render(<Header />);
});
