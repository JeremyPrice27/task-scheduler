import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { newStore } from './store';
import App from './App';

let store = newStore();

test('renders app, content, and data', () => {
  render(
      <Provider store={store}>
        <App></App>
      </Provider>
  );
  const headline = screen.getByText('Team Planning');
  expect(headline).toBeDefined();

  const addItemButton = screen.getByText('Add Item');
  expect(addItemButton).toBeDefined();
});
