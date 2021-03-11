import { render } from '@testing-library/react';
import React from 'react';
import CartTable from './CartTable';

describe(CartTable.name, () => {
  const mockCartItems = {};
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match snapshot for the table', () => {
    const { container } = render(<CartTable cartItems={mockCartItems} />);
    expect(container).toMatchSnapshot();
  });
});
