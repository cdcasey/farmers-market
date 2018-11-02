import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import RemoveButton from './RemoveButton';

afterEach(cleanup);

const onClick = jest.fn();

test('<RemoveButton /> should render and click', () => {
    const { debug, getByTestId } = render(<RemoveButton remove={onClick} />);
    const removeButton = getByTestId('remove-button');

    fireEvent.click(removeButton);
    expect(onClick).toHaveBeenCalledTimes(1);
    // debug();
});
