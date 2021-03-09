import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
