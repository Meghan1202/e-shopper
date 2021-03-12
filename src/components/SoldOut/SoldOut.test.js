import { render } from '@testing-library/react';
import React from 'react';
import SoldOut from './SoldOut';

describe(SoldOut.name, () => {
  test('should match the snapshot', () => {
    const { container } = render(<SoldOut />);
    expect(container).toMatchSnapshot();
  });
});
