import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext, { Theme } from '../../ThemeContext';
import NavBar from './NavBar';

describe(NavBar.name, () => {
  test('should match snapshot for theme light', () => {
    const { container } = render(
      <ThemeContext.Provider value={Theme.light}>
        <BrowserRouter><NavBar items={0} /></BrowserRouter>
      </ThemeContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot for theme dark', () => {
    const { container } = render(
      <ThemeContext.Provider value={Theme.dark}>
        <BrowserRouter><NavBar items={0} /></BrowserRouter>
      </ThemeContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display My basket', () => {
    render(
      <BrowserRouter><NavBar items={0} /></BrowserRouter>,
    );
    screen.getByText('My Basket');
  });
  test('should go to new route when E-shopper link is clicked', () => {
    render(<BrowserRouter><NavBar items={0} /></BrowserRouter>);
    const eshopperLink = screen.getByText('E-Shopper');
    fireEvent.click(eshopperLink);
    expect(document.location.href).toBe('http://localhost/');
  });
  test('should go to new route when My Basket link is clicked', () => {
    render(<BrowserRouter><NavBar items={0} /></BrowserRouter>);
    const myBasketLink = screen.getByText('My Basket');
    fireEvent.click(myBasketLink);
    expect(document.location.href).toBe('http://localhost/cart');
  });
  test('should go to new route when All Orders link is clicked', () => {
    render(<BrowserRouter><NavBar items={0} /></BrowserRouter>);
    const allOrderLink = screen.getByText('All Orders');
    fireEvent.click(allOrderLink);
    expect(document.location.href).toBe('http://localhost/allOrder');
  });
});
