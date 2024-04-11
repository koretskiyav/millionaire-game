import React from 'react';
import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Page from '../page';

describe('Home page', () => {
  const page = render(<Page />);

  test('should contains correct tittle', async () => {
    const headline = await page.findByTestId('headline');
    expect(headline.textContent).toBe('Who wants to be a millionaire?');
  });

  test('should contains start button', async () => {
    const startButton = await page.findByTestId('start-button');
    expect(startButton.textContent).toBe('Start');
  });
});
