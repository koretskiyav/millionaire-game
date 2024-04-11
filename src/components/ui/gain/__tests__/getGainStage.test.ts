import { expect, describe, test } from 'vitest';
import { getGainStage } from '../utils';

describe('getGainStage', () => {
  test('should get passed gain stage', async () => {
    expect(getGainStage(3, 4)).toBe('passed');
  });

  test('should get current gain stage', async () => {
    expect(getGainStage(2, 2)).toBe('current');
  });

  test('should get passed gain stage', async () => {
    expect(getGainStage(5, 1)).toBe('upcoming');
  });
});
