import { render, screen } from '@testing-library/react';
import React from 'react';
import Quantity from './Quantity';

describe(Quantity.name, () => {
  const mockProps = {
    count: 0,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match snapshot', () => {
    const { count, onIncrement, onDecrement } = mockProps;
    const { container } = render(<Quantity
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />);
    expect(container).toMatchSnapshot();
  });
  test('should display count in basket', () => {
    const { count, onIncrement, onDecrement } = mockProps;
    render(<Quantity
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />);
    screen.getByText('0 in Basket');
  });
});
