import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const onClickHandler = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button label="My Button" variant="primary" onClick={onClickHandler} />,
    );
    expect(baseElement).toBeTruthy();
  });
  it('should click', () => {
    const { baseElement } = render(
      <Button label="as" variant="primary" onClick={() => 'farts'} />,
    );

    const button = screen.getByRole('button', {
      name: 'button',
    });
    fireEvent.click(button);
  });
});
