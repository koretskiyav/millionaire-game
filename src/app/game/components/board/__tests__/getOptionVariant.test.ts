import { expect, describe, test } from 'vitest';
import { getOptionVariant } from '../utils';

describe('getOptionVariant', () => {
  test('should return default without results', async () => {
    expect(getOptionVariant(1, 0, null)).toBe('default');
  });

  test('should return default with results', async () => {
    expect(getOptionVariant(1, 0, [2, 3])).toBe('default');
  });

  test('should return selected option', async () => {
    expect(getOptionVariant(1, 1, null)).toBe('selected');
  });

  test('should return correct option', async () => {
    expect(getOptionVariant(1, 1, [1, 2, 3])).toBe('correct');
  });

  test('should return wrong option', async () => {
    expect(getOptionVariant(1, 1, [3])).toBe('wrong');
  });
});
