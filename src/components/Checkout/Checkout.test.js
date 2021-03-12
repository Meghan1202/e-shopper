import axios from 'axios';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout, { postCartData } from './Checkout';

describe(Checkout.name, () => {
  beforeEach(() => {
    const mockResponse = {
      data: {
        items: [
          {
            id: 4,
            name: 'duster',
            price: 80,
            count: 1,
            category: 'Household Items',
          },
        ],
        id: 60,
        date: 1615541692008,
      },
    };
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse).mockResolvedValue(null);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('Should mock the post call', async () => {
    const mockResponse = {
      data: {
        items: [
          {
            id: 4,
            name: 'duster',
            price: 80,
            count: 1,
            category: 'Household Items',
          },
        ],
        id: 60,
        date: 1615541692008,
      },
    };
    const mockCartData = [];
    const mockUpdateAllOrders = jest.fn();
    const mockPastOrderData = [];
    const mockResetCart = jest.fn();
    const mockResetProductCache = jest.fn();
    const spyOnAxios = jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);
    await postCartData(mockCartData, mockUpdateAllOrders, mockPastOrderData,
      mockResetCart, mockResetProductCache);
    expect(spyOnAxios).toHaveBeenCalledTimes(1);
  });
  test('should match the snapshot', () => {
    const mockcheckoutItems = jest.fn();
    const mockupdateAllOrders = jest.fn();
    const mockallorders = [];
    const mockResetCart = jest.fn();
    const mockResetProductCache = jest.fn();
    const { container } = render(<Checkout
      checkoutItems={mockcheckoutItems}
      updateAllOrders={mockupdateAllOrders}
      allOrders={mockallorders}
      resetCart={mockResetCart}
      resetProductCache={mockResetProductCache}
    />);
    expect(container).toMatchSnapshot();
  });
  test('should render the submit button', () => {
    const mockcheckoutItems = jest.fn();
    const mockupdateAllOrders = jest.fn();
    const mockallorders = [];
    const mockResetCart = jest.fn();
    const mockResetProductCache = jest.fn();
    render(<Checkout
      checkoutItems={mockcheckoutItems}
      updateAllOrders={mockupdateAllOrders}
      allOrders={mockallorders}
      resetCart={mockResetCart}
      resetProductCache={mockResetProductCache}
    />);
    screen.getByTestId('Submit-button');
  });
});
