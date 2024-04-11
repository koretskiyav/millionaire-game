import { expect, describe, test } from 'vitest';
import { MAX_FONT_SIZE, MIN_FONT_SIZE, getFontSize } from '../utils';

describe('getFontSize', () => {
  test('should get maximum font size for short words', async () => {
    expect(getFontSize('Word')).toBe(MAX_FONT_SIZE);
  });

  test('should get minimum font size for long sentences', async () => {
    expect(
      getFontSize(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ),
    ).toBe(MIN_FONT_SIZE);
  });

  test('should get 17.6px font size for 58 chapters', async () => {
    expect(
      getFontSize('Lorem ipsum dolor sit amet, consectetur adipiscing elit, s'),
    ).toBe(17.6);
  });

  test('should get 15.8px font size for 79 chapters', async () => {
    expect(
      getFontSize(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      ),
    ).toBe(15.8);
  });
});
