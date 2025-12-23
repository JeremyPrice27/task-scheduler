import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app headline', () => {
  render(<App />);
  const linkElement = screen.getByText('Team Planning');
  expect(linkElement).toBeDefined();
});
