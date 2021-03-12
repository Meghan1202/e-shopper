import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe(Home.name, () => {
  const mockValue = {
    product: {
      'Dairy & Eggs': [
        {
          category: 'Dairy & Eggs',
          companyName: 'Bigbasket',
          count: 0,
          id: 5,
          imgSrc: 'abc',
          name: 'milk',
          price: 10,
          stock: 2,
        },
      ],
    },
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match snapshot for theme light', () => {
    const { product, onIncrement, onDecrement } = mockValue;
    const { container } = render(
      <Home products={product} onIncrement={onIncrement} onDecrement={onDecrement} />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display the category name', () => {
    const { product, onIncrement, onDecrement } = mockValue;
    render(<Home products={product} onIncrement={onIncrement} onDecrement={onDecrement} />);
    screen.getByText('Dairy & Eggs');
  });
  test('should render the Product Component', () => {
    const { product, onIncrement, onDecrement } = mockValue;
    render(<Home
      products={product}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />);
    screen.getByTestId('product-card');
  });
});
