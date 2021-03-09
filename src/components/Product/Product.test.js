import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe(Product.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    expect(container).toMatchSnapshot();
  });
  test;
});
