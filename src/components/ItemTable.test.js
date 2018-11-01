import React from 'react';
import { cleanup, render } from 'react-testing-library';
import ItemTable from './ItemTable';

import { inventory } from '../market';

afterEach(cleanup);

test('<ItemTable /> should have the same number of items as in the inventory', () => {
    const { debug, getAllByTestId } = render(<ItemTable />);
    expect(getAllByTestId('item').length).toBe(Object.keys(inventory).length);
    // debug();
});
