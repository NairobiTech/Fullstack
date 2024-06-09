import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Grade 1 Reading List text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Grade 1 Reading List/i);
  expect(linkElement).toBeInTheDocument();
});
