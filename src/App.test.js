import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
            count: 1,
            category: 'Fruits & Vegatables',
            date: 1615122360481,
          }],
      },
    })
      .mockResolvedValueOnce({

      })
      .mockResolvedValue(null);
  });
  test.only('should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test('should render the NavBar', () => {
    render(<App />);
    const clickOnNavBar = screen.getByTestId('nav-bar');
    fireEvent.click(clickOnNavBar);
    expect(document.location.href).toBe('http://localhost/');
  });
  test('should render the home component and route to home page', () => {
    render(<App />);
    screen.getByTestId('home-page');
  });
  test('should fetch the data from external API call', async () => {
    // const spyOnAxios = jest.spyOn(Axios, 'get').mockResolvedValue({
    //   data: {
    //     data: [
    //       {
    //         items: [
    //           {
    //             id: 1,
    //             name: 'apple',
    //             price: 120,
    //             count: 1,
    //             category: 'Fruits & Vegatables',
    //           },
    //         ],
    //         id: 1,
    //         date: 1615122360481,
    //       }],
    //   },
    // });
    const mockUrl = 'abc.com';
    const response = await getAllInventory(mockUrl);
    // expect(spyOnAxios).toHaveBeenCalledWith('abc.com');
  });
});
