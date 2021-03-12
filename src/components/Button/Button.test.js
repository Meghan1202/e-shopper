import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe(Button.name, () => {
  test('Should match the snapshot', () => {
    // eslint-disable-next-line react/no-children-prop
    const { container } = render(<Button className="abc" children="xyz" onClick={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
