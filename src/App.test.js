import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe(App.name, () => {
  test('should match the snapshot', () => {
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
});
