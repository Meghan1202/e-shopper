import {
  fireEvent, render, screen, act,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockCartItems = {
    'Fruits & Vegatables': [
      {
        category: 'Fruits & Vegatables',
        companyName: 'Bigbasket',
        count: 2,
        id: 3,
        imgSrc: 'abc',
        name: 'grapes',
        price: 50,
        stock: 8,
      },
    ],
  };
  it('should match the snapshot', () => {
    const { container } = render(<BrowserRouter><Cart cartItems={mockCartItems} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should take to checkout page onClick of button', () => {
    render(<BrowserRouter><Cart cartItems={mockCartItems} /></BrowserRouter>);
    const checkOutButton = screen.getByText('CheckOut');
    act(() => { fireEvent.click(checkOutButton); });
    expect(document.location.href).toBe('http://localhost/checkout');
  });
  it('should render the cart table', () => {
    render(<BrowserRouter><Cart cartItems={mockCartItems} /></BrowserRouter>);
    screen.getByTestId('Cart-Table');
  });
  it('Should display the category name', () => {
    render(<BrowserRouter><Cart cartItems={mockCartItems} /></BrowserRouter>);
    screen.getByText('Bigbasket');
  });
});
