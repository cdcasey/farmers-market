import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import Button from './Button';

afterEach(cleanup);

const onClick = jest.fn();

test('<Button /> should render and click', () => {
    const { debug, getByTestId } = render(<Button add={onClick} />);
    const addButton = getByTestId('add-button');

    fireEvent.click(addButton);
    expect(onClick).toHaveBeenCalledTimes(1);
    // debug();
});
