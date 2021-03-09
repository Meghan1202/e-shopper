import { render, screen } from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe(Product.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    expect(container).toMatchSnapshot();
  });

  test('should display the company name, ', () => {
    render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    screen.getByText('Fresho');
  });
  test('should display the product name, ', () => {
    render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    screen.getByText('Banana');
  });
  test('should render the Quantity component', () => {
    render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    screen.getByTestId('quantity-count');
  });
  test('should display the image of the product', () => {
    render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    screen.getByTestId('product-image');
  });
  test('should display the quantity of products', () => {
    render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    screen.getByText('Quantity:2');
  });
  test('should display the price of the products', () => {
    render(<Product productName="Banana" productPrice={40} productQuantity="2" onIncrement={jest.fn()} onDecrement={jest.fn()} count={1} companyName="Fresho" imgSrc="abc" />);
    screen.getByText('40/-');
  });
});
