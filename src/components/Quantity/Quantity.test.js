import { fireEvent, render, screen } from '@testing-library/react';
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
  test('should update the message when increment button is clicked', () => {
    const { count, onIncrement, onDecrement } = mockProps;
    render(<Quantity
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />);
    const incrementElement = screen.getByText('+');
    fireEvent.click(incrementElement);
    expect(onIncrement).toHaveBeenCalledTimes(1);
  });
  test('should update the message when decrement button is clicked', () => {
    const { count, onIncrement, onDecrement } = mockProps;
    render(<Quantity
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />);
    const decrementElement = screen.getByText('-');
    fireEvent.click(decrementElement);
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
  test('should match snapshot', () => {
    const { onIncrement, onDecrement } = mockProps;
    render(<Quantity
      count={50}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />);
    screen.getByText('50 in Basket');
  });
});
