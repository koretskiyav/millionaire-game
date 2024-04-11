import { expect, describe, test } from 'vitest';
import { getLetter } from '../utils';

describe('getLetter', () => {
  test('should get A for 0 index', async () => {
    expect(getLetter(0)).toBe('A');
  });

  test('should get K for 10 index', async () => {
    expect(getLetter(10)).toBe('K');
  });

  test('should get Z for 25 index', async () => {
    expect(getLetter(25)).toBe('ZZ');
  });
});
