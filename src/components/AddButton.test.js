import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import AddButton from './AddButton';

afterEach(cleanup);

const onClick = jest.fn();

test('<AddButton /> should render and click', () => {
  const { debug, getByTestId } = render(<AddButton addItemToCart={onClick} />);
  const addButton = getByTestId('add-button');

  fireEvent.click(addButton);
  expect(onClick).toHaveBeenCalledTimes(1);
  // debug();
});
