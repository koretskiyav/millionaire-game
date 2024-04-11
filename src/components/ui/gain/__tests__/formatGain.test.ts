import { expect, describe, test } from 'vitest';
import { formatGain } from '../utils';

describe('formatGain', () => {
  test('should format 0 gain correctly', async () => {
    expect(formatGain(0)).toBe('$0');
  });

  test('should format 100 gain correctly', async () => {
    expect(formatGain(100)).toBe('$100');
  });

  test('should format 123456 gain correctly', async () => {
    expect(formatGain(123456)).toBe('$123,456');
  });
});
