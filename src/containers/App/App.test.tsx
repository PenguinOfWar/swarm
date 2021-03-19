import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react component', () => {
  render(<App />);
  const gdayMate = screen.getByText(/@swarm.ai\/boudica/i);
  expect(gdayMate).toBeInTheDocument();
});
