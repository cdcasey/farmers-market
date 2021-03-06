import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, fireEvent } from 'react-testing-library';
import { App } from './App';

afterEach(cleanup);

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('<App /> should have a header', () => {
  const { debug, getByTestId } = render(<App />);
  expect(getByTestId('header-container')).toBeTruthy();
  // debug();
});

xtest('<App /> should have a list of items for sale', () => {
  const { debug, getByTestId } = render(<App />);
  expect(getByTestId('market-items')).toBeTruthy();
  // debug();
});

xtest('<App /> should update the items in cart when a button is clicked', () => {
  const { debug, getByTestId } = render(<App />);
  const addButton = getByTestId('add-button');
  const headerNotifier = getByTestId('num-items');

  expect(headerNotifier.textContent).toBe('0');

  fireEvent.click(addButton);
  expect(headerNotifier.textContent).toBe('1');

  const removeButton = getByTestId('remove-button');
  fireEvent.click(removeButton);
  expect(headerNotifier.textContent).toBe('0');

  // debug();
});

xtest('<App /> should apply BOGO when two coffee items are added', () => {
  const { debug, getByTestId, container } = render(<App />);
  const coffeeButton = container.querySelector('#CF1');
  fireEvent.click(coffeeButton);
  const total = getByTestId('total');
  expect(total.textContent).toBe('$11.23');
  fireEvent.click(coffeeButton);
  expect(total.textContent).toBe('$11.23');

  // debug();
});

xtest('<App /> should apply APOM when two Oatmeal and Apples are added', () => {
  const { debug, getByTestId, container } = render(<App />);
  const oatmealButton = container.querySelector('#OM1');
  const appleButton = container.querySelector('#AP1');
  fireEvent.click(oatmealButton);
  const total = getByTestId('total');
  expect(total.textContent).toBe('$3.69');
  fireEvent.click(oatmealButton);
  expect(total.textContent).toBe('$7.38');
  fireEvent.click(appleButton);
  expect(total.textContent).toBe('$10.38');
  fireEvent.click(appleButton);
  expect(total.textContent).toBe('$13.38');
  // debug();
});
