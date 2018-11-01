import React from 'react';
import { cleanup, render } from 'react-testing-library';
import AddButton from './AddButton';

afterAll(cleanup);

test('<AddButton />', () => {
    const { debug } = render(<AddButton />);
});
