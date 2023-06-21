import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
  it('should click', () => {
    const { baseElement } = render(<App />);

    const button = screen.getByRole('button', {
      name: 'button',
    });
    fireEvent.click(button);
  });
});
