import { GainStage } from './types';

export function getGainStage(gainInd: number, currentInd: number): GainStage {
  if (gainInd === currentInd) return 'current';
  if (gainInd > currentInd) return 'upcoming';
  return 'passed';
}

const gainFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function formatGain(gain: number) {
  return gainFormatter.format(gain); // '$3,500'
}
