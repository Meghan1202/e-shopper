import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Order from './Orders';

describe(Order.name, () => {
  it('should match the snapshot', () => {
    const mockItem = [{
      'Fruits & Vegatables': [
        {
          category: 'Fruits & Vegatables',
          count: 1,
          id: 1,
          name: 'apple',
          price: 120,
        },
      ],
      date: 1615122360481,
      id: 1,
    }];
    const { container } = render(<Order noOfItems={1} cartItems={mockItem} />);
    expect(container).toMatchSnapshot();
  });
});
