import React from 'react';
import {
  render, screen, fireEvent, act, waitFor,
} from '@testing-library/react';
import Axios from 'axios';
import App, { getAllInventory } from './App';

describe(App.name, () => {
  beforeEach(() => {
    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: {
        data: [
          {
            id: 1,
            name: 'apple',
            price: 120,
            count: 2,
            category: 'Fruits & Vegatables',
            date: 1615122360481,
          }],
      },
    })
      .mockResolvedValueOnce({
        data: {
          data:
            [
              {
                items:
            [
              {
                id: 1,
                name: 'apple',
                price: 120,
                count: 1,
                category: 'Fruits & Vegatables',
              }],
                id: 1,
                date: 1615122360481,
              }],
        },
      })
      .mockResolvedValue(null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match the snapshot', async () => {
    const { container } = await waitFor(() => render(<App />));
    expect(container).toMatchSnapshot();
  });

  test('should render the NavBar', async () => {
    await waitFor(() => render(<App />));
    screen.getByTestId('nav-bar');
  });

  test('should render all order page', async () => {
    await waitFor(() => render(<App />));
    const allOrdersButton = screen.getByText('All Orders');
    act(() => { fireEvent.click(allOrdersButton); });
    screen.getByTestId('All-Order');
    expect(document.location.href).toBe('http://localhost/allOrder');
  });

  test('should render all Cart page', async () => {
    await waitFor(() => render(<App />));
    const myBasketButton = screen.getByText('My Basket');
    act(() => { fireEvent.click(myBasketButton); });
    screen.getByTestId('Cart');
    expect(document.location.href).toBe('http://localhost/cart');
  });

  test('should render the home component and route to home page', async () => {
    await waitFor(() => render(<App />));
    const eShopperButon = screen.getByText('E-Shopper');
    act(() => { fireEvent.click(eShopperButon); });
    screen.getByTestId('home-page');
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should fetch the data from external API call', async () => {
    const spyOnAxios = jest.spyOn(Axios, 'get').mockResolvedValue({
      data: {
        data: [
          {
            id: 1,
            name: 'apple',
            price: 120,
            count: 2,
            category: 'Fruits & Vegatables',
            date: 1615122360481,
          }],
      },
    });
    const mockUrl = 'abc.com';
    const response = await getAllInventory(mockUrl);
    expect(spyOnAxios).toHaveBeenCalledWith(mockUrl);
    expect(response).toEqual({
      'Fruits & Vegatables': [{
        category: 'Fruits & Vegatables', companyName: 'Bigbasket', count: 0, date: 1615122360481, id: 1, imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/800px-Culinary_fruits_front_view.jpg', name: 'apple', price: 120, stock: 2,
      }],
    });
  });

  test('OnIncrement function has been called', async () => {
    await waitFor(() => render(<App />));
    const incrementButton = screen.getByText('+');
    act(() => { fireEvent.click(incrementButton); });
    screen.getByText('In Stock:1');
    screen.getByText('1 in Basket');
  });
  test('OnDecrement function has been called', async () => {
    await waitFor(() => render(<App />));
    const decrementButton = screen.getByText('-');
    act(() => { fireEvent.click(decrementButton); });
    screen.getByText('0 in Basket');
    screen.getByText('In Stock:2');
  });
});
